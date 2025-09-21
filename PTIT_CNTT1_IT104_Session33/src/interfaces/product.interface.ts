export interface IProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

export interface ICart {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export type ActionType = {
  type: string;
  payload?: IProduct | ICart;
};
