function eventoClick(arg) {
    console.log("Click");
    console.log(arg.x, arg.y);
}

function eventoDobleClick(arg) {
    console.log("Doble Click");
    console.log(arg);
}

function eventoFocus(arg) {
    console.log("Focus");
    console.log(arg);
}

function eventoBlur(arg) {
    console.log("Blur");
    console.log(arg);
}

function eventoMouseOut(arg) {
    console.log("Mouse Out");
    console.log(arg);
}

function eventoKeyPress(arg) {
    console.log("Key Press");
    console.log(arg);
}

var objDemo = document.getElementById("objDemo");
console.log(objDemo);

objDemo.addEventListener("keypress", eventoKeyPress);

var objBtn = document.getElementById("objBtn");
console.log(objBtn);

objBtn.addEventListener("click", eventoClick);

objBtn.click();