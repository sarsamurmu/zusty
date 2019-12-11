module.exports = {
  globDirectory: 'public/',
  globPatterns: [
    '**/*.{js,html,png,svg,css,json,ttf,woff2}'
  ],
  globIgnores: [
    'mainOffliner.js'
  ],
  swSrc: 'src/docs/swBase.js',
  swDest: 'public/offliner.js',
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
};
