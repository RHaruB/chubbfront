import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPersonsComponent } from './components/all-persons/all-persons.component';
import { InsertPersonComponent } from './components/insert-person/insert-person.component';
import{FormsModule}from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { AllSegurosComponent } from './components/all-seguros/all-seguros.component';
import { InsertSeguroComponent } from './components/insert-seguro/insert-seguro.component';
import { AllPolizasComponent } from './components/all-polizas/all-polizas.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPersonsComponent,
    InsertPersonComponent,
    MenuComponent,
    AllSegurosComponent,
    InsertSeguroComponent,
    AllPolizasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
