let ajustes = {
    nombre: "Fernando Herrera",
    email: "fernando.herrera85@gmail.com",
    facebook: "fernando.herrera.777",
    google: "fernando.her.123",
    premium: true,
    edad: 28
};

console.log(ajustes);

/*
//ES5
var nombre = ajustes.nombre,
    email = ajustes.email,
    facebook = ajustes.facebook,
    google = ajustes.google,
    premium = ajustes.premium;
    
console.log(nombre, email, facebook, google, premium);
*/

//ES6
let { email, facebook, nombre, google, premium: dePago, twitter = "fernando_her85", youtube: canal = "fer85/youtube", edad: edadReal = 33 } = ajustes;

console.log(nombre, email, facebook, google, dePago, twitter, canal, edadReal);