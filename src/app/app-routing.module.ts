import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './structure/accueil/accueil.component';
import {GeneraleComponent} from './allproduct/generale/generale.component';
import {ProduitComponent} from './allproduct/produit/produit.component';
import {DetailproduitComponent} from './allproduct/detailproduit/detailproduit.component';
import {RechercheComponent} from './allproduct/recherche/recherche.component';
import {NosmagasinComponent} from './structure/nosmagasin/nosmagasin.component';
import {ContactComponent} from './structure/contact/contact.component';
import {CommandesComponent} from './client/commandes/commandes.component';
import {CompteComponent} from './client/compte/compte.component';
import {ProfilComponent} from './client/profil/profil.component';

const routes: Routes = [
  {path:'products/:p1/:p2',component:GeneraleComponent},
  {path:'', component:AccueilComponent},
  {path:'generale', component:GeneraleComponent},
  {path:'nosMagasin', component:NosmagasinComponent},
  {path:'contact', component:ContactComponent},
  {path:'commande', component:CommandesComponent},
  {path:'compte', component:CompteComponent},

  {path:'profil/:id', component:ProfilComponent},
  {path:'products/:p1', component:ProduitComponent},
  {path:'detail/:id', component:DetailproduitComponent},
  {path:'chercher/:mc', component:RechercheComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
