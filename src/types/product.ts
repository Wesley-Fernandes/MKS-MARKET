export interface IProduct {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
  }
  
 export interface ICartItem {
    product: IProduct;
    quantity: number;
  }