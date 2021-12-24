import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './structure/accueil/accueil.component';
import {GeneraleComponent} from './allproduct/generale/generale.component';
import {ProduitComponent} from './allproduct/produit/produit.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"generale", component:GeneraleComponent},
  {path:'products/:p1/:p2',component:GeneraleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
