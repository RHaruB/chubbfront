import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-all-persons',
  templateUrl: './all-persons.component.html',
  styleUrls: ['./all-persons.component.css']
})
export class AllPersonsComponent implements OnInit {
  public personas : any[]  = []
  constructor(
    private personaService: PersonaService,
    private router : Router
  ){

  }


  ngOnInit(): void {
    this.obtenerPersonas()
  }

  obtenerPersonas(){
    this.personas = []
    this.personaService.getPersonas().subscribe(resp=>{
      console.log(resp)
      this.personas = resp
    });
  }
  editar( person: any){
    localStorage.setItem("usuario",JSON.stringify(person));
    this.router.navigate(["insertPerson"])

  }
  eliminarPersona(person : any){
    alert(person.codigo)
    this.personaService.deletePersona(person).subscribe(resp=>{
      
      if(resp){
        alert("Se elmino correctamente");
        this.ngOnInit();
      }else{
        alert("No se pudo eliminar la persona")
      }
    });
  }
}
