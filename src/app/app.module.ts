import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './structure/menu/menu.component';
import { EnteteComponent } from './structure/entete/entete.component';
import { ContenuComponent } from './structure/contenu/contenu.component';
import { FooterComponent } from './structure/footer/footer.component';
import { GeneraleComponent } from './allproduct/generale/generale.component';
import { AccueilComponent } from './structure/accueil/accueil.component';
import { ProduitComponent } from './allproduct/produit/produit.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EnteteComponent,
    ContenuComponent,
    FooterComponent,
    GeneraleComponent,
    AccueilComponent,
    ProduitComponent
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
