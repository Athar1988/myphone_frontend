import {Client} from './client.model';

export class Order {
  public id:number;
  public client:Client=null;
  public totalAmount:number;
  public date:Date;
}


