---
title: 🐚 Shellshock
categories: [Vulnerabilidades]
image: "/assets/img/ss.png"
description: "Shellshock vulnerability"
---

# 🐚 **Shellshock**

Explicación de la vulnerabilidad Shellshock – Remote Code Execution via Bash

<div style="text-align: center;">
  <img src="{{ site.baseurl }}/assets/img/ss.png" width="300"/>
  <p style="font-style: italic; margin-top: 8x;">Copyright © 2010-2025 Freepik Company S.L.</p>
</div>

ShellShock es una vulnerabilidad descubierta en 2014 que afecta a versiones antiguas de **Bash (Bourne Again Shell)**, muy utilizada en sistemas Linux y Unix.  

El problema radica en cómo Bash interpreta variables de entorno que contienen funciones. Bash permite exportar funciones a procesos hijos mediante variables de entorno, pero en las versiones vulnerables no solo interpreta la definición de la función, sino también cualquier comando adicional que aparezca después de ella.  

Un atacante puede aprovechar este comportamiento inyectando código malicioso en variables de entorno que el sistema construye a partir de datos externos, como las **cabeceras HTTP** en servidores web que usan **CGI (Common Gateway Interface)**.  

Un ejemplo de un payload malicioso puede ser el siguiente:
```bash
() { :; }; /bin/bash -c 'whoami'
```

- `() { :; };` define una función vacía.  
- Lo que aparece después (`/bin/bash -c 'whoami'`) se ejecuta directamente como comando, porque Bash lo interpreta de forma incorrecta.  

Si este código se introduce, por ejemplo, en el campo **User-Agent** de una petición HTTP, y el servidor vulnerable usa Bash al ejecutar un script CGI, el comando se ejecutará con los privilegios del proceso del servidor (a menudo el usuario `www-data`, aunque en configuraciones inseguras podría ser incluso `root`).  

No obstante, no es necesario que la vulnerabilidad esté presente únicamente cuando exista un archivo `.cgi`.  

Por diversos motivos, un servidor puede almacenar las cabeceras HTTP en variables de entorno, lo que también podría dar lugar a la explotación de ShellShock. Sin embargo, este comportamiento no es muy común en la actualidad.
