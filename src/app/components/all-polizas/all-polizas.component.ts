import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { SeguroService } from 'src/app/services/seguro.service';

@Component({
  selector: 'app-all-polizas',
  templateUrl: './all-polizas.component.html',
  styleUrls: ['./all-polizas.component.css']
})
export class AllPolizasComponent implements OnInit {
  public polizas : any[]  = []
  public seguros : any[]  = []
  public personas : any[] = []
  public codigoCliente = 0;
  public codigoSeguro = 0;
  public cedula = "";
  constructor(
    private seguroService: SeguroService,
    private personaService:PersonaService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.obtenerPolizas()
    this.obtenerSeguros()
    this.obtenerPersonas();
  }
  obtenerPolizas(){
    this.polizas = []
    this.seguroService.getPolizas("",0).subscribe(resp=>{
      console.log(resp)
      this.polizas = resp
    });
}
obtenerSeguros(){
  this.seguros = []
  this.seguroService.getSeguros().subscribe(resp=>{
    console.log(resp)
    this.seguros = resp
  });
}
obtenerPersonas(){
  this.personas = []
  this.personaService.getPersonas().subscribe(resp=>{
    console.log(resp)
    this.personas = resp
  });
}

asignar(){
  if(this.codigoCliente > 0 && this.codigoSeguro > 0)
this.seguroService.asignarPolizas(this.codigoCliente,this.codigoSeguro).subscribe(resp=>{
  if(resp)
  this.obtenerPolizas();
})
}
buscar(){
  alert(`seguro ${this.codigoSeguro} cliente ${this.cedula}`);
  this.polizas = []
    this.seguroService.getPolizas(this.cedula,this.codigoSeguro).subscribe(resp=>{
      console.log(resp)
      this.polizas = resp
    });
}
}
