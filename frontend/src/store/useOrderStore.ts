import { Order } from '@/models';
import {create} from 'zustand';

interface OrderStore {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
  removeOrder: (id: number) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  setOrders: (orders) => set({ orders }),
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
  removeOrder: (id) => set((state) => ({
    orders: state.orders.filter((order) => order.id !== id),
  })),
}));
