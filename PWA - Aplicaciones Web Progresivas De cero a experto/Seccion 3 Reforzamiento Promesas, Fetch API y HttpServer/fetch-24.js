//Devuelve el element img del html
let img = document.querySelector('img');

fetch('batman.png')
    .then(resp => resp.blob())
    .then(imagen => {
        var imgPath = URL.createObjectURL(imagen);

        img.src = imgPath;
    });