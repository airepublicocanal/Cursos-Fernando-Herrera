var hoy = new Date();
var fMili = new Date(1);

//var fFija = new Date(anio, mes, dia, hora, minuto, segundo, milisegundo);
var fFija = new Date(2016, 9, 30, 13, 35, 59, 950);

console.log(hoy);
console.log(fMili);
console.log(fFija);

console.log(hoy.getYear());
console.log(hoy.getFullYear() + 1);
console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDate());
console.log(hoy.getHours());
console.log(hoy.getMinutes());
console.log(hoy.getSeconds());
console.log(hoy.getMilliseconds());
console.log(hoy.getTime());

var fecha = new Date(2016, 9, 30);

Date.prototype.sumarDias = function(dias) {
    this.setDate(this.getDate() + dias);
    
    return this;
}

Date.prototype.sumarAnios = function(anios) {
    this.setFullYear(this.getFullYear() + anios);
    
    return this;
}

console.log(fecha);
console.log(fecha.sumarDias(5));
fecha.setDate(32);
console.log(fecha);
console.log(fecha.sumarDias(-2));
console.log(fecha.sumarAnios(1));
console.log(fecha.sumarAnios(-2));

var inicio = new Date();

for (let index = 0; index < 1000; index++) {
    console.log("Algo...")
}

var fin = new Date();

console.log(inicio);
console.log(fin);
console.log(fin.getTime() - inicio.getTime());
console.log((fin.getTime() - inicio.getTime()) / 1000);