import { ItemProduct } from "@/models";
import { create } from "zustand";

interface BagStore {
  productsInBag: Record<number, ItemProduct>;
  setProducts: (products: Record<number, ItemProduct>) => void;
  addProduct: (product: ItemProduct) => void;
  removeProduct: (id: number) => void;
  incrementAmmount: (id: number) => void;
  decrementAmmount: (id: number) => void;
}
export const useBagStore = create<BagStore>((set) => ({
  productsInBag: {},

  setProducts: (products) => set({ productsInBag: products }),

  addProduct: (newProduct) => set((state) => {
    const existingProduct = state.productsInBag[newProduct.id];

    return {
      productsInBag: {
        ...state.productsInBag,
        [newProduct.id]: existingProduct
          ? { ...existingProduct, ammount: existingProduct.ammount + newProduct.ammount }
          : newProduct,
      },
    };
  }),

  removeProduct: (id) => set((state) => {
    const { [id]: _, ...remainingProducts } = state.productsInBag;
    return { productsInBag: remainingProducts };
  }),

  incrementAmmount: (id: number) => set((state) => ({
    productsInBag: {
      ...state.productsInBag,
      [id]: {
        ...state.productsInBag[id],
        ammount: state.productsInBag[id].ammount + 1,
      },
    },
  })),

  decrementAmmount: (id: number) => set((state) => {
    const currentAmmount = state.productsInBag[id].ammount;
  
    if (currentAmmount <= 1) {
      const { [id]: _, ...remainingProducts } = state.productsInBag;
      return { productsInBag: remainingProducts };
    }
    return {
      productsInBag: {
        ...state.productsInBag,
        [id]: {
          ...state.productsInBag[id],
          ammount: currentAmmount - 1,
        },
      },
    };
  }), 
  
}));

