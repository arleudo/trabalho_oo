import { Product } from '@/models';
import {create} from 'zustand';

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id) => set((state) => ({
    products: state.products.filter((product) => product.id !== id),
  })),
}));
