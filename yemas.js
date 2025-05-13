function ocultarElementos() {
    // Oculta el título h1
    const titulo = document.querySelector('h1');
    titulo.style.display = 'none';

    // Oculta la grid de huevos
    const huevos = document.getElementsByClassName('egg-grid');
    if (huevos.length > 0) {
        huevos[0].style.display = 'none';
    }
}

function mostrarProceso() {
    const processContainer = document.createElement('div');
    processContainer.id = 'process-container';

    const processGif = document.createElement('img');
    processGif.id = 'process-gif';
    processGif.src = 'images/process.gif';

    processContainer.appendChild(processGif);
    document.body.appendChild(processContainer);
}

function iniciarContador(duracion, descripcion) {
    let tiempo = 0;

    const contador = document.createElement('div');
    contador.style.fontSize = '250%';
    contador.style.marginTop = '20px';
    contador.innerText = `Tiempo: 00:00`;
    document.body.appendChild(contador);

    const descripcionTexto = document.createElement('div');
    descripcionTexto.style.fontSize = '150%';
    descripcionTexto.style.marginTop = '10px';
    descripcionTexto.innerText = descripcion;
    document.body.appendChild(descripcionTexto);

    const progresoContainer = document.createElement('div');
    progresoContainer.style.width = '80%';
    progresoContainer.style.height = '30px';
    progresoContainer.style.backgroundColor = '#e0e0e0';
    progresoContainer.style.borderRadius = '15px';
    progresoContainer.style.overflow = 'hidden';
    progresoContainer.style.marginTop = '20px';
    progresoContainer.style.marginLeft = "10%";
    document.body.appendChild(progresoContainer);

    const progresoBar = document.createElement('div');
    progresoBar.style.height = '100%';
    progresoBar.style.width = '0%';
    progresoBar.style.backgroundColor = '#ffcc00';
    progresoBar.style.transition = 'width 1s linear';
    progresoContainer.appendChild(progresoBar);

    // Cargar sonido
    const dingSound = new Audio('images/ding.mp3');

    const intervalId = setInterval(() => {
        tiempo++;

        const minutos = Math.floor(tiempo / 60);
        const segundos = tiempo % 60;
        const minutosFormateados = minutos.toString().padStart(2, '0');
        const segundosFormateados = segundos.toString().padStart(2, '0');
        contador.innerText = `Tiempo: ${minutosFormateados}:${segundosFormateados}`;

        const progreso = (tiempo / duracion) * 100;
        progresoBar.style.width = `${Math.min(progreso, 100)}%`;

        if (tiempo >= duracion) {
            clearInterval(intervalId);
            descripcionTexto.innerText = '¡Listo! 🍳';

            // Reproducir sonido
            dingSound.play();

            // Mostrar botón para volver al menú
            const volverBtn = document.createElement('button');
            volverBtn.innerText = 'Volver al menú';
            volverBtn.style.fontSize = '120%';
            volverBtn.style.marginTop = '20px';
            volverBtn.style.padding = '10px 20px';
            volverBtn.style.borderRadius = '10px';
            volverBtn.style.backgroundColor = '#ffcc00';
            volverBtn.style.fontFamily = 'Pixelify Sans', "sans-serif";
            volverBtn.style.border = 'none';
            volverBtn.style.cursor = 'pointer';
            volverBtn.style.transition = 'background 0.3s';

            volverBtn.onmouseover = () => volverBtn.style.backgroundColor = '#ffdb4d';
            volverBtn.onmouseout = () => volverBtn.style.backgroundColor = '#ffcc00';

            volverBtn.onclick = () => {
                // Recargar la página para volver al menú inicial
                location.reload();
            };

            document.body.appendChild(volverBtn);
        }
    }, 1000);
}




function prepararYema(duracionEnMinutos, descripcion) {
    const duracionEnSegundos = duracionEnMinutos * 60;
    ocultarElementos();
    mostrarProceso();
    iniciarContador(duracionEnSegundos, descripcion);
}

function yema1() {
    prepararYema(3, 'Yema blanda: Clara cocida, yema líquida.');
}

function yema2() {
    prepararYema(4, 'Yema media: Clara cocida, yema semi-líquida.');
}

function yema3() {
    prepararYema(5, 'Yema media/alta: Clara bien cocida, yema casi sólida.');
}

function yema4() {
    prepararYema(6, 'Yema dura: Clara y yema completamente sólidas.');
}
