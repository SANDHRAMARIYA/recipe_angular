import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewrecipeComponent } from './viewrecipe/viewrecipe.component';
import{ HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const appRoutes:Routes=[
  {
  path:"",component:AddrecipeComponent
},
{
  path:"view",component:ViewrecipeComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddrecipeComponent,
    ViewrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
