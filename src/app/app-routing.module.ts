
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
import {ModifierConatctComponent} from './admin/modifier-conatct/modifier-conatct.component';
import {InscriptionComponent} from './client/inscription/inscription.component';
import {ListeClientComponent} from './admin/liste-client/liste-client.component';
import {ListeMessageComponent} from './admin/liste-message/liste-message.component';
import {AuthGaurdGuard} from './auth-gaurd.guard';
import {ErrorComponent} from './structure/error/error.component';



const routes: Routes = [
  {path:'products/:p1/:p2',component:GeneraleComponent},

  {path:'listeProduit/admin/:idCat', canActivate: [AuthGaurdGuard], component:TousProduitComponent},
  {path:'profil/:idClient', component:ProfilComponent},
  {path:'products/:p1', component:ProduitComponent},
  {path:'detail/:id', component:DetailproduitComponent},
  {path:'chercher/:mc', component:RechercheComponent},
  {path:'detailCommande/:idCommande', component:DetailCommandeComponent},

  {path:'', component:AccueilComponent},
  {path:'generale', component:GeneraleComponent},
  {path:'nosMagasin', component:NosmagasinComponent},
  {path:'contact', component:ContactComponent},
  {path:'admin', component:LoginComponent},
  {path:'compte', component:CompteComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'panier', component:PanierComponent},

  {path:'listeCommandes/admin', canActivate: [AuthGaurdGuard], component:ListeCommandeComponent},
  {path:'listeCommandes', component:ListeCommandeComponent},

  {path:'listeClient',  canActivate: [AuthGaurdGuard],component:ListeClientComponent},
  {path:'listeMessage', canActivate: [AuthGaurdGuard], component:ListeMessageComponent},


  {path:'Modifierprofil', component:ModifierProfilComponent},
  {path:'modifierConatct', canActivate: [AuthGaurdGuard], component:ModifierConatctComponent},
  {path:'commande', component:CommandesComponent},

  { path: 'ajouteProduit', canActivate: [AuthGaurdGuard], component: AjouterProduitComponent },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
