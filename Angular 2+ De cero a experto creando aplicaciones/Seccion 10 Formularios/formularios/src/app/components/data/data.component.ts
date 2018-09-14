import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Usuario, NombreCompleto } from "../../models/index";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  nombreCompleto:NombreCompleto = new NombreCompleto("Ander", "Cadaval Feijoo");

  usuario:Usuario = new Usuario(this.nombreCompleto,
    "ander.cadaval@gmail.com",
    "andercad",
    ["Musica", "Cine", "Frontenis", "Angular"]);

  /*
  usuario:Usuario = {
    nombreCompleto: {
      nombre: "Ander",
      apellido: "Cadaval"
    },
    email: "ander.cadaval@gmail.com",
    userName: "andercad",
    password1: "72395419-K",
    password2: "72395419-K",
    pasatiempos: ["Musica", "Cine", "Frontenis"]
  }
  */

  constructor() {
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [
            Validators.required,
            Validators.minLength(5)
          ]
        ),
        'apellido': new FormControl('', [
          Validators.required,
          this.noCadaval
        ])
      }),
      'email': new FormControl('', [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
        ]
      ),
      'pasatiempos': new FormArray([]),
      'userName': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

    for (let variable of this.usuario.pasatiempos) {
      (<FormArray> this.forma.controls['pasatiempos']).push(
        new FormControl('', Validators.required)
      )
    }

    this.forma.valueChanges.subscribe(data => {
      console.log(data);
    });

    this.forma.controls['userName'].statusChanges.subscribe(data => {
      console.log(data);
    });

    this.forma.controls['userName'].valueChanges.subscribe(data => {
      console.log(data);
    });

    this.forma.controls['password1'].valueChanges.subscribe(data => {
      this.forma.controls['password2'].updateValueAndValidity();
    });

    this.forma.setValue(this.usuario);
  }

  ngOnInit() {
  }

  agregarPasatiempo() {
    (<FormArray> this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  noCadaval(control: FormControl):{[s:string]:boolean} {
    if ("Cadaval" === control.value) {
      return {
        noCadaval: true
      }
    }

    return null;
  }

  existeUsuario(control:FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
          if ("strider" === control.value) {
            resolve({existe: true});
          } else {
            resolve(null);
          }
        }, 3000);
    });

    return promesa;
  }

  noIgual(control: FormControl):{[s:string]:boolean} {
    console.log(this);
    let forma:any = this;

    if (forma.controls['password1'].value !== control.value) {
      return {
        noIgual: true
      }
    }

    return null;
  }

  guardarCambios() {
    console.log(this.forma);
    console.log(this.forma.value);
    console.log(this.usuario);

    this.forma.reset(this.usuario);
    /*
    this.forma.reset({
      nombreCompleto: {
        nombre: "",
        apellido: "",
        email: ""
      }
    });
    */
  }
}
