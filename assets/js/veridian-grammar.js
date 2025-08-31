// assets/js/veridian-grammar.js
Prism.languages.veridian = {
  'comment': { pattern: /\/\/.*|(?:\/\*(?:[^*]|\*(?!\/))*\*\/)/, greedy: true },
  'string': { pattern: /"(?:\\.|[^\\"])*"/, greedy: true },
  'keyword': /\b(?:func|let|if|else|while|return|type|class|enum|import|package|lib|self|init|async|await|match)\b/,
  'decorator': { pattern: /[$@#~?]{1,2}/, alias: 'function' },
  'class-name': /\b[A-Z]\w*\b/,
  'boolean': /\b(?:true|false)\b/,
  'nil': { pattern: /\bnil\b/, alias: 'important' },
  'operator': /[=+\-/*!<>]+|::=|??/,
  'number': /\b\d+(?:\.\d+)?\b/,
  'punctuation': /[{}(),.;:]/
};
