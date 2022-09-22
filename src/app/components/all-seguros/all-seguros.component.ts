import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguroService } from 'src/app/services/seguro.service';

@Component({
  selector: 'app-all-seguros',
  templateUrl: './all-seguros.component.html',
  styleUrls: ['./all-seguros.component.css']
})
export class AllSegurosComponent implements OnInit {
  public seguros : any[]  = []
  constructor(
    private seguroService: SeguroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerSeguros()
  }
  obtenerSeguros(){
    this.seguros = []
    this.seguroService.getSeguros().subscribe(resp=>{
      console.log(resp)
      this.seguros = resp
    });
  }
  editarSeguro(seguro:any){
    localStorage.setItem("seguro",JSON.stringify(seguro));
    this.router.navigate(["insertSeguros"])
  }
}
