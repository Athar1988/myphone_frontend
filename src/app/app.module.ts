import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './structure/menu/menu.component';
import { EnteteComponent } from './structure/entete/entete.component';
import { ContenuComponent } from './structure/contenu/contenu.component';
import { FooterComponent } from './structure/footer/footer.component';
import { GeneraleComponent } from './allproduct/generale/generale.component';
import { AccueilComponent } from './structure/accueil/accueil.component';
import { ProduitComponent } from './allproduct/produit/produit.component';
import { DetailproduitComponent } from './allproduct/detailproduit/detailproduit.component';
import { RechercheComponent } from './allproduct/recherche/recherche.component';
import { NosmagasinComponent } from './structure/nosmagasin/nosmagasin.component';
import { ContactComponent } from './structure/contact/contact.component';
import { CompteComponent } from './client/compte/compte.component';
import { CommandesComponent } from './commandes/commandes/commandes.component';
import { ProfilComponent } from './client/profil/profil.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PanierComponent} from './commandes/panier/panier.component';
import { ListeCommandeComponent } from './commandes/liste-commande/liste-commande.component';
import { DetailCommandeComponent } from './commandes/detail-commande/detail-commande.component';
import { ModifierProfilComponent } from './client/modifier-profil/modifier-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EnteteComponent,
    ContenuComponent,
    FooterComponent,
    GeneraleComponent,
    AccueilComponent,
    ProduitComponent,
    DetailproduitComponent,
    RechercheComponent,
    NosmagasinComponent,
    ContactComponent,
    CompteComponent,
    CommandesComponent,
    ProfilComponent,
    PanierComponent,
    ListeCommandeComponent,
    DetailCommandeComponent,
    ModifierProfilComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule

  ],

  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
