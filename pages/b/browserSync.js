const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const browserSync = require('browser-sync').create('default');

const zustycss = path.resolve(__dirname, '../../dist/zusty.css');

browserSync.init({
  posrt: 5000,
  server: {
    baseDir: './public',
    serveStaticOptions: {
      extensions: ['html']
    }
  },
  callbacks: {
    ready: (err, bs) => {
      bs.addMiddleware('/dist/zusty.css', (req, res) => {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        });
        fs.createReadStream(zustycss).pipe(res)
      });

      bs.addMiddleware('*', (req, res) => {
        res.writeHead(404, {
          'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('./public/404.html'));
        res.end()
      })
    }
  }
});

chokidar.watch(zustycss).on('change', () => browserSync.reload('*.css'));

browserSync.watch('./public/**/*').on('change', browserSync.reload);
