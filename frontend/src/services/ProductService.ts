import { useProductStore } from "@/store/useProductStore";
import axios from "axios";

export class ProductService {

    public async loadProducts() {
        const { setProducts } = useProductStore.getState();
        const prods = (await axios.get("http://localhost:8080/products")).data;
        setProducts(prods);
    }
}