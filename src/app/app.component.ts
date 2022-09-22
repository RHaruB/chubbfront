import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chubbfront';
  
  constructor(
    private personaService: PersonaService
  ){
    this.personaService.getPersonas().subscribe(resp=>{
      console.log(resp)
    });
  }
}
