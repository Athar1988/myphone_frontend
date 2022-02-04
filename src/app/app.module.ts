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
import { LoginComponent } from './admin/login/login.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { AjouterProduitComponent } from './admin/ajouter-produit/ajouter-produit.component';
import { TousProduitComponent } from './admin/tous-produit/tous-produit.component';
import { TousCommandesComponent } from './admin/tous-commandes/tous-commandes.component';
import { ModifierConatctComponent } from './admin/modifier-conatct/modifier-conatct.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {NgxPaginationModule} from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';

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
    LoginComponent,
    MenuAdminComponent,
    AjouterProduitComponent,
    TousProduitComponent,
    TousCommandesComponent,
    ModifierConatctComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    //NgxPaginationModule
    CarouselModule,
    BrowserAnimationsModule

  ],

  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
