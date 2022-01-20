export interface Product{
  id:number;
  name:string;
  description:string;
  marque:string;
  pourcentage:number;
  currentPrice:number;
  promotion:boolean;
  available:boolean;
  photoName:string;
  quantity:number;
  _links:{
    self:{
      href:string;
    },
    panier:{
      href:string;
    },
    category:{
      href:string
    }
  }

}

