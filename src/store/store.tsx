import { createStore } from "zustand";

interface Product {
  id: number;
  img: string;
  title: string;
  text: string;
  sum: number;
  // shop: any;
  quantity: number;
}
interface BasketState {
  products: Product[];
}
export const useBasketStore = createStore<BasketState>(() => ({
  products: [],
}));
