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
