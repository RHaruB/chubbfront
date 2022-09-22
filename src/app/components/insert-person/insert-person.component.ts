import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Interface/Person';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-insert-person',
  templateUrl: './insert-person.component.html',
  styleUrls: ['./insert-person.component.css']
})

export class InsertPersonComponent implements OnInit, OnDestroy {
  codigo: number = 0
  titulo: string = "Ingresar  Persona";
  person: Persona = {
    codigo: 0,
    cedula: "",
    nombre: "",
    telefono: "",
    edad: 0
  }
  expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    telefono: /^\d{10}$/,
    cedula: /^\d{10,10}$/,
    edad: /^\d/,

  }
  public formPerson: FormGroup | undefined;

  constructor(
    private personaService: PersonaService,
    private router: Router
  ) {

  }
  ngOnDestroy(): void {
    localStorage.removeItem("usuario")
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }
  obtenerDatos() {
    if (localStorage.getItem("usuario")) {
      var datos = localStorage.getItem("usuario")
      this.person = JSON.parse(datos!)
      this.titulo = "Editar Persona"
    }

  }
  ingresarPersona() {
    if (this.validarDatos()) {
      if (this.person.codigo === 0) {
        this.personaService.postPersona(this.person).subscribe(resp => {
          console.log(resp)
          if (resp) {
            this.router.navigate(["allPersons"]);
          }
          else {
            alert("No se pudo registrar la persona");
          }

        });
      } else {
        this.personaService.putPersona(this.person).subscribe(resp => {
          if (resp) {
            this.router.navigate(["allPersons"]);
            localStorage.removeItem("usuario");
          }
          else {
            alert("No se pudo editar la persona");
          }
        })
      }
    }
  }
  validarDatos() {
    if (this.expresiones.cedula.test(this.person.cedula)
      && this.expresiones.nombre.test(this.person.nombre)
      && this.expresiones.telefono.test(this.person.telefono)
      && this.expresiones.edad.test(this.person.edad.toString())
    ) {
      if (this.person.edad > 17 && this.person.edad < 100) {
        return true
      }
      else {
        alert("La edad ingresada no es valida");
        return false;
      }

    }
    else {
      alert("Los datos son incorrectos")
      return false;
    }

  }
}
