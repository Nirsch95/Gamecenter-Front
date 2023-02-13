import { ProdBuyI } from './prodbuy-i';
export interface BuyI {
  id: string;
  date: any;
  idType: string;
  clientId: string;
  clientName: string;
  products: [ProdBuyI]
}
