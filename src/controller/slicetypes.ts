// Types used in slice controller

export type item = {
    id: string;
    name: string;
    price: number;
    src: string;
    quantity: number;
    desc: string;
}


export type State = {
    basket: item[]
  }
   
export type Action = {
    payload: item;
    type: string;
  }
  
export type displayState = {
  baskets: State
} 