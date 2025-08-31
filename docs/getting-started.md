---
layout: default
title: Guía de Inicio Rápido
permalink: /docs/getting-started/
---

# Guía de Inicio Rápido

Bienvenido a la documentación de Veridian. Esta guía te ayudará a instalar el compilador y a ejecutar tu primer programa.

## 1. Instalación

Actualmente, Veridian está en desarrollo activo. Para instalar la última versión desde el código fuente, necesitarás tener Rust instalado.

```bash
# Clona el repositorio
git clone https://github.com/veridian-lang/veridian.git
cd veridian

# Compila e instala la herramienta 'veridian'
cargo build --release
# (Instrucciones de instalación futuras aquí)
```

## 2. Tu Primer Programa

Crea un fichero llamado `main.v` con el siguiente contenido:

```veridian{line-numbers="true"}
// main.v
package io;

func main() {
  io.print("¡Mi primer programa en Veridian funciona!");
}
```

## 3. Compila y Ejecuta

Desde tu terminal, usa la herramienta de Veridian para compilar y ejecutar tu fichero:

```bash
veridian run main.v
```

Deberías ver el siguiente resultado en tu consola:

```text
¡Mi primer programa en Veridian funciona!
```

¡Felicidades! Ahora estás listo para explorar el resto de las características del lenguaje.
