import { Order } from "@/models";
import { useOrderStore } from "@/store/useOrderStore";
import axios from "axios";

export class OrderService {

    public async createOrder(order : Order ) {        
        const { addOrder } = useOrderStore.getState();
        const ret = (await axios.post("http://localhost:8080/orders", order)).data;
        addOrder(ret);
    }
}