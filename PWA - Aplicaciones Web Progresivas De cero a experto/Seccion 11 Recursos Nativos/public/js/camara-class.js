class Camara {
    constructor(videoNode) {
        console.log('Camara class inicializada');

        this.videoNode = videoNode;
    }

    encender() {
        if (!navigator.mediaDevices) {
            return console.log('Camara no disponible');
        }

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { width: 300, height: 300 }
        }).then(stream => {
            this.videoNode.srcObject = stream;
            this.stream = stream;
        });
    }

    apagar() {
        if (!navigator.mediaDevices) {
            return console.log('Camara no disponible');
        }

        this.videoNode.pause();

        if (this.stream) {
            this.stream.getTracks()[0].stop();
        }
    }

    tomarFoto() {
        // Crear un elemento canvas para renderizar ahi la foto
        let canvas = document.createElement('canvas');

        // Colocar las dimensiones igual al elemento del vídeo
        canvas.setAttribute('width', 300);
        canvas.setAttribute('height', 300);

        // Obtener el contexto del canvas
        let context = canvas.getContext('2d'); // Una simple imagen

        // Dibujar la iamgen dentro del canvas
        context.drawImage(this.videoNode, 0, 0, canvas.width, canvas.height);

        this.foto = context.canvas.toDataURL();

        // Lipieza
        canvas = null;
        context = null;

        return this.foto;
    }
}