export interface Product {
    id: number;
    description: string;
    srcImage: string;
    value: number;
}

export interface ItemProduct {
    id: number;
    description: string;
    value: number;
    ammount: number;
}

export interface Order {
    id: number;
    userId: number;
    items: OrderItem[];
}

export interface OrderItem {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
}