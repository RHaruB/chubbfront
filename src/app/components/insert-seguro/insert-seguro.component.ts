import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seguro } from 'src/app/Interface/Seguro';
import { SeguroService } from 'src/app/services/seguro.service';

@Component({
  selector: 'app-insert-seguro',
  templateUrl: './insert-seguro.component.html',
  styleUrls: ['./insert-seguro.component.css']
})
export class InsertSeguroComponent implements OnInit, OnDestroy {

  titulo: string = "Ingresar Seguro";
  seguro: Seguro = {
    codigo: 0,
    descripcion: "",
    valor_Asegurado: 0,
    prima: 0,
    estado: ""
  }
  expresiones = {
    texto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    valor: /^\d/,
  }

  constructor(
    private seguroService: SeguroService,
    private router: Router

  ) { }
  ngOnDestroy(): void {
    localStorage.removeItem("seguro")
  }

  ngOnInit(): void {
    this.obternerSeguro();
  }
  obternerSeguro() {
    if (localStorage.getItem("seguro")) {
      this.seguro = JSON.parse(localStorage.getItem("seguro")!)
      this.titulo = "Editar Seguro"
    }
  }
  ingresarSeguro() {
    if (this.seguro.codigo == 0) {
      this.seguroService.postSeguro(this.seguro).subscribe(resp => {
        console.log(resp)
        if (resp)
          this.seguro.descripcion = ''
        this.seguro.prima = 0
        this.seguro.valor_Asegurado = 0
        this.router.navigate(["allSeguros"])
      });
    }
    else{
      this.seguroService.putSeguro(this.seguro).subscribe(resp => {
        console.log(resp)
        if (resp)
          this.seguro.descripcion = ''
        this.seguro.prima = 0
        this.seguro.valor_Asegurado = 0

        localStorage.removeItem("seguro")
        this.router.navigate(["allSeguros"])
      });
    }

  }
  validarDatos() {
    if (this.expresiones.valor.test(this.seguro.valor_Asegurado.toString())
      && this.expresiones.valor.test(this.seguro.prima.toString())
      && this.expresiones.texto.test(this.seguro.descripcion)
    ) {
      if (this.seguro.valor_Asegurado > 0) {
        return true
      }
      else if(this.seguro.valor_Asegurado < 0) {
        alert("valor asegurado debe ser mayor de 0");
        return false;
      }
      if (this.seguro.prima > 0) {
        return true
      }
      else {
        alert("prima debe ser mayor de 0");
        return false;
      }

    }
    else {
      alert("Los datos son incorrectos")
      return false;
    }

  }

}
