export interface Client{
   id:number;
   email:string;
   telephone:string;
   nom:string;
   prenom:string;
   ville:string;
   address:string;
   motdepasse:string;
  _links:{
    self:{
      href:string;
    },
    panier:{
      href:string;
    },
    order:{
      href:string
    }
  }
}


export class Client {
  constructor(
    public id=0,
    public email='',
    public telephone='',
    public nom='',
    public prenom='',
    public ville='',
    public address='',
    public motdepasse='',

  ){}

}

