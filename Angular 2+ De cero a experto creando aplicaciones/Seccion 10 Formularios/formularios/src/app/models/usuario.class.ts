import { NombreCompleto } from './nombreCompleto.class';

export class Usuario {
  nombreCompleto:NombreCompleto;
  email:string;
  userName:string;
  password1:string;
  password2:string;
  pasatiempos:string[];

  constructor(nombreCompleto:NombreCompleto,
    email:string,
    userName:string,
    pasatiempos:string[]) {

    this.nombreCompleto = nombreCompleto;
    this.email = email;
    this.userName = userName;
    this.password1 = "";
    this.password2 = "";
    this.pasatiempos = pasatiempos;
  }
}
