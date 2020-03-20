const {
  escapeHtml,
  unescapeAll
} = require('markdown-it/lib/common/utils');

module.exports = (md) => {
  md.use(require('markdown-it-attrs'));

  md.renderer.rules.code_inline = function(tokens, idx, options, env, slf) {
    var token = tokens[idx];

    return '<code inline' + slf.renderAttrs(token) + '>' +
      escapeHtml(tokens[idx].content).replace(/{(.*?)}\((.*?)\)/g, (m, g1, g2, o, s) => `<span class="${g1.trim()}">${g2}</span>`) +
      '</code>';
  };

  md.renderer.rules.fence = function(tokens, idx, options, env, slf) {
    var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      highlighted, i, tmpAttrs, tmpToken, type = 'codeblock';

    if (info) {
      langName = info.split(/\s+/g)[0];
    }

    if (options.highlight) {
      highlighted = options.highlight(token.content, langName) || escapeHtml(token.content)
    } else {
      highlighted = escapeHtml(token.content)
    }

    if (highlighted.indexOf('<pre') === 0) {
      return highlighted + '\n'
    }

    if (info) {
      i = token.attrIndex('class');
      tmpAttrs = token.attrs ? token.attrs.slice() : [];

      if (i < 0) {
        tmpAttrs.push(['class', options.langPrefix + langName])
      } else {
        tmpAttrs[i][1] += ' ' + options.langPrefix + langName
      }

      tmpToken = {
        attrs: tmpAttrs
      }
    }

    if (token.attrs && token.attrs.flat().includes('raw')) return token.content;
    if (token.attrs && token.attrs.flat().includes('execute')) {
      return Function(`return (() => { ${token.content} })()`)()
    }

    highlighted = highlighted
      .replace(/{{(.*?):(.*?)}}/g, (m, g1, g2, o, s) => `<span ${g1.trim()}>${g2}</span>`)
      .replace(/(?:\s+)?hidCode{{((.|\s)*?)}}(?:\s+)?/g, '')
      .replace(/noRender{{((.|\s)*?)}}/g, (_, offset) => offset)
      ;

    if (token.attrs && token.attrs.flat().includes('snippet')) {
      token.attrs.shift();
      tmpToken.attrs.shift();

      return `
      <div class="snippet-container">
        <div class="snippet">
         ${
           token.content
           .replace(/{{(.*?):(.*?)}}/g, (m, g1, g2, o, s) => g2)
           .replace(/(?:\s+)?hidCode{{((.|\s)*?)}}(?:\s+)?/g, (_, offset) => offset)
           .replace(/(?:\s+)?noRender{{((.|\s)*?)}}(?:\s+)?/g, '')
         }
        </div>
        <div class="code-container">
          <div class="code">
            <pre><code ${slf.renderAttrs(info ? tmpToken : token)}>${highlighted}</code></pre>
          </div>
        </div>
      </div><br>
      `.replace(/(<(pre|script|style|textarea)[^]+?<\/\2)|(^|>)\s+|\s+(?=<|$)/g, '$1$3')
    }

    return `
    <div class="code-container">
      <div class="code">
        <pre><code ${slf.renderAttrs(info ? tmpToken : token)}>${highlighted}</code></pre>
      </div>
    </div><br>
    `.replace(/(<(pre|script|style|textarea)[^]+?<\/\2)|(^|>)\s+|\s+(?=<|$)/g, '$1$3')
  }

  const containers = ['primary', 'success', 'warning', 'error', 'link'];

  containers.forEach((key) => {
    md.use(require('markdown-it-container'), key, {
      validate(params) {
        return params.includes(key)
      },
      render(tokens, idx) {
        var m = tokens[idx].info.trim().match(new RegExp(`^${key}\\s+(.*?)$`));

        if (tokens[idx].nesting === 1) {
          return m !== null ? `<div class="zust-note zust-${key}"><h3>${m[1]}</h3>` : `<div class="zust-note zust-${key}">`
        } else {
          return '</div>\n';
        }
      }
    })
  });
}
