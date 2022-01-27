import {Client} from './client.model';
import {Item} from './Item';

export class Commande {
  public id:number;
  public client:Client=null;
  public products:Array<Item>=[];
  public totalAmount:number;
  public date:Date;
  public statut:string;
}


/*
 {
      "id" : "2",
      "name" : "LrqHf28G7cDgVS38N7",
      "image" : "unknown.png",
      "quantiteCommander" : 1,
      "pourcentage" : 28.0,
      "prixUn" : 9501.0},
    {
      "id" : "1",
      "name" : "qIFWkoyXnf8VWioUlB",
      "image" : "unknown.png",
      "quantiteCommander" : 1,
      "pourcentage" : 97.0,
      "prixUn" : 1880.0,
    },

 */
