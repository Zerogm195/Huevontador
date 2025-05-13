# Huevontador 🍳

## Un contador para el punto perfecto de tu huevo frito

Este programa, creado con cariño utilizando **HTML**, **CSS**, **JavaScript**, y la potencia de **Electron**, te ayuda a llevar la cuenta del tiempo de cocción de tu huevo frito. ¡Olvídate de los huevos quemados o demasiado líquidos!

## ¿Cómo funciona? ⚙️

El Huevontador te ofrece una interfaz sencilla e intuitiva donde puedes:

* **Iniciar un contador:** Con un simple clic, comienza a medir el tiempo de cocción.
* **Personalizar el tiempo:** Ajusta el tiempo según tu preferencia para un huevo más o menos cocido.
* **Recibir notificaciones:** Configura alertas para saber cuándo tu huevo está en el punto exacto.
* **Interfaz amigable:** Disfruta de un diseño limpio y fácil de usar en tu escritorio gracias a Electron.

**¿Cómo ejecutarlo?**

***Puedes ejecutarlo directamente abriendo el archivo `Start-electron.bat`***

* **Nota:** si te aparece que debes instalar dependencias suele ser porque node_modules no esta o faltan librerias en electron en ese caso solo le das a (y) y esperas a que termine cuando finalice va abrirse automaticamente la aplicación

1.  Asegúrate de tener **Node.js** y **npm** (o **yarn**) instalados en tu sistema. Electron utiliza Node.js en su núcleo.

o tambien puedes:
   
2.  Abre una **terminal** o **símbolo del sistema** en la raíz del directorio del proyecto (donde se encuentra el archivo `package.json` y el `start-electron.bat`).
4.  Ejecuta el siguiente comando:

    ```bash
    ./start-electron.bat
    ```

    Este script ejecutará internamente el comando `npx electron .`, que se encarga de iniciar la aplicación Electron utilizando el punto (`.`) para indicar el directorio actual como la ubicación de tu aplicación principal.

**¿Qué hace `npx electron .`?**

* **`npx`:** Es una herramienta de ejecución de paquetes de npm. Te permite ejecutar paquetes (como `electron`) sin necesidad de instalarlos globalmente.
* **`electron`:** Es el ejecutable de Electron que permite correr tu aplicación web como una aplicación de escritorio.
* **`.`:** Indica que el punto de entrada principal de tu aplicación Electron (definido usualmente en tu archivo `main.js`) se encuentra en el directorio actual.

Con este sencillo script, podrás poner en marcha el Huevontador de forma rápida y cómoda.

## Tecnologías Utilizadas 💻

* **HTML:** Para la estructura de la interfaz de usuario.
* **CSS:** Para darle estilo y una apariencia atractiva.
* **JavaScript:** Para la lógica y la interactividad del contador.
* **Electron:** Para empaquetar la aplicación web y ejecutarla como una aplicación de escritorio multiplataforma.


## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el Huevontador, no dudes en abrir un *issue* o enviar un *pull request*.
