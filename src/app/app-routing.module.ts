import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPersonsComponent } from './components/all-persons/all-persons.component';
import { AllPolizasComponent } from './components/all-polizas/all-polizas.component';
import { AllSegurosComponent } from './components/all-seguros/all-seguros.component';
import { InsertPersonComponent } from './components/insert-person/insert-person.component';
import { InsertSeguroComponent } from './components/insert-seguro/insert-seguro.component';

const routes: Routes = [
  {path: '' , redirectTo: "allPolizas", pathMatch:"full"},
  {path : "allPersons" , component: AllPersonsComponent  },
  {path : "insertPerson" , component: InsertPersonComponent  },
  {path : "allSeguros" , component: AllSegurosComponent  },
  {path : "insertSeguros" , component: InsertSeguroComponent  },
  {path : "allPolizas" , component: AllPolizasComponent  },
  {path:"**",redirectTo : "allPolizas", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
