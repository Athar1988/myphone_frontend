//import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './structure/accueil/accueil.component';
import {GeneraleComponent} from './allproduct/generale/generale.component';
import {ProduitComponent} from './allproduct/produit/produit.component';
import {DetailproduitComponent} from './allproduct/detailproduit/detailproduit.component';
import {RechercheComponent} from './allproduct/recherche/recherche.component';
import {NosmagasinComponent} from './structure/nosmagasin/nosmagasin.component';
import {ContactComponent} from './structure/contact/contact.component';
import {CommandesComponent} from './commandes/commandes/commandes.component';
import {CompteComponent} from './client/compte/compte.component';
import {ProfilComponent} from './client/profil/profil.component';
import {PanierComponent} from './commandes/panier/panier.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListeCommandeComponent} from './commandes/liste-commande/liste-commande.component';
import {DetailCommandeComponent} from './commandes/detail-commande/detail-commande.component';
import {ModifierProfilComponent} from './client/modifier-profil/modifier-profil.component';
import {LoginComponent} from './admin/login/login.component';
import {AjouterProduitComponent} from './admin/ajouter-produit/ajouter-produit.component';
import {TousProduitComponent} from './admin/tous-produit/tous-produit.component';
import {TousCommandesComponent} from './admin/tous-commandes/tous-commandes.component';
import {ModifierConatctComponent} from './admin/modifier-conatct/modifier-conatct.component';



const routes: Routes = [
  {path:'products/:p1/:p2',component:GeneraleComponent},

  {path:'', component:AccueilComponent},
  {path:'generale', component:GeneraleComponent},
  {path:'nosMagasin', component:NosmagasinComponent},
  {path:'contact', component:ContactComponent},
  {path:'admin', component:LoginComponent},
  {path:'compte', component:CompteComponent},
  {path:'panier', component:PanierComponent},
  {path:'listeCommandes', component:ListeCommandeComponent},
  {path:'Modifierprofil', component:ModifierProfilComponent},
  {path:'modifierConatct', component:ModifierConatctComponent},



  { path: 'ajouteProduit', component: AjouterProduitComponent },
  {path:'ajouteProduit', component:AjouterProduitComponent},
  {path:'listeProduit', component:TousProduitComponent},
  {path:'listeProduit', component:TousProduitComponent},



  {path:'profil/:idClient', component:ProfilComponent},
  {path:'products/:p1', component:ProduitComponent},
  {path:'detail/:id', component:DetailproduitComponent},
  {path:'chercher/:mc', component:RechercheComponent},
  {path:'commande/:somme', component:CommandesComponent},
  {path:'detailCommande/:idCommande', component:DetailCommandeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
