import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './structure/accueil/accueil.component';
import {GeneraleComponent} from './allproduct/generale/generale.component';
import {ProduitComponent} from './allproduct/produit/produit.component';
import {DetailproduitComponent} from './allproduct/detailproduit/detailproduit.component';

const routes: Routes = [
  {path:'products/:p1/:p2',component:GeneraleComponent},
  {path:'', component:AccueilComponent},
  {path:'generale', component:GeneraleComponent},
  {path:'products/:p1', component:ProduitComponent},
  {path:'detail/:id', component:DetailproduitComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
