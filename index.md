---
layout: default
---

# Veridian

### Facilidad, Rendimiento y Seguridad. Unificados.

Veridian es un lenguaje de programación de propósito general diseñado desde cero para ofrecer una experiencia de desarrollo ergonómica sin sacrificar el rendimiento de una aplicación nativa ni la robustez de un sistema de tipos seguro.

Con una sintaxis única basada en decoradores, un sistema de nulabilidad segura y un ecosistema de herramientas integrado, Veridian está diseñado para la próxima generación de software.

```veridian{line-numbers="true"}
// main.v
// Tu primer programa en Veridian

func main() {
  // Declara una constante inmutable ($) de tipo string (@)
  let $@greeting = "¡Hola desde Veridian!";

  // La librería estándar 'io' se importa con la palabra clave 'package'.
  package io;
  io.print(@greeting);
}
```

[**Empezar →**](/docs/getting-started/) | [**Ver en GitHub →**](https://github.com/veridian-lang/veridian)
