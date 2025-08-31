// assets/js/veridian-grammar.js

// Le enseñamos a Prism la gramática de nuestro lenguaje Veridian.
Prism.languages.veridian = {
  // Los comentarios tienen la máxima prioridad.
  'comment': {
    pattern: /\/\/.*|(?:\/\*(?:[^*]|\*(?!\/))*\*\/)/,
    greedy: true
  },
  // Las cadenas de texto entre comillas dobles.
  'string': {
    pattern: /"(?:\\.|[^\\"])*"/,
    greedy: true
  },
  // Palabras clave que hemos diseñado.
  'keyword': /\b(?:func|let|if|else|while|return|type|class|enum|import|package|lib|self|init|async|await)\b/,
  // El decorador de inmutabilidad y los de tipo.
  'decorator': {
    // Captura $, @, #, ~, ?, ??
    pattern: /[$@#~?]{1,2}/, 
    // Lo marcamos como un alias para que pueda tener un estilo especial.
    alias: 'function' 
  },
  // Nombres de tipos (clases, enums) que suelen empezar con mayúscula.
  'class-name': /\b[A-Z]\w*\b/,
  // Booleanos y el valor nil.
  'boolean': /\b(?:true|false)\b/,
  'nil': {
    pattern: /\bnil\b/,
    alias: 'important' // Le damos un alias para que resalte más.
  },
  // Operadores.
  'operator': /[=+\-/*!<>]+|::=|??/,
  // Números (enteros y flotantes).
  'number': /\b\d+(?:\.\d+)?\b/,
  // Puntuación.
  'punctuation': /[{}(),.;:]/
};
