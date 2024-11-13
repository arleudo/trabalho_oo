import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Order, OrderItem, Product, User } from "@/models";
import { ProductService } from "@/services/ProductService";
import { useProductStore } from "@/store/useProductStore";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/store/useDialogStore";
import { useBagStore } from "@/store/useBagStore";
import { Label } from "@/components/ui/label";
import { OrderService } from "@/services/OrderService";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Home(){
    const { products } = useProductStore(); 
    const { productsInBag, setProducts } = useBagStore(); 
    const { isOpen, close } = useDialogStore();

    const incrementAmmount = useBagStore((state) => state.incrementAmmount);
    const decrementAmmount = useBagStore((state) => state.decrementAmmount); 
    const [total, setTotal] = useState(0);
    const [user, setUser] = useState<User| null>(null);
    

    useEffect(()=>{
        new ProductService().loadProducts();
        const user_ = JSON.parse(localStorage.getItem("user")!);
         setUser(user_);
    },[]);

    useEffect(() => {
        const newTotal = Object.values(productsInBag).reduce(
            (acc, product) => acc + product.value * product.ammount,
            0
        );
        setTotal(newTotal);
    }, [productsInBag]);

    function handleConfirm(){
        let order = {} as Order;
        order.items = [];
        order.userId = user?.id!;

        Object.values(productsInBag).map((oi) => {
            let oi_ = {} as OrderItem;
            oi_.productId = oi.id;
            oi_.quantity = oi.ammount;
            order.items.push(oi_);
        });  
        new OrderService().createOrder(order);
        setProducts([]);
        close();
    }  

    return (
        <>
            <Header />
            <main className="pt-[8rem] pb-20 items-center bottom-0 max-w-[1200px] mx-auto gap-36 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
            {products?.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        srcImage={product.srcImage}
                        description={product.description}
                        value={product.value}
                        id={product.id}
                    />
                ))}

            <Dialog open={isOpen} onOpenChange={close}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>Seu carrinho</DialogTitle>
                    <DialogDescription>
                        Confira se os itens que você deseja estão aqui e confirme seu pedido clicando no botão abaixo.
                    </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                    {Object.values(productsInBag).map((product) => (
                        <div key={product.id} className="flex items-center justify-between">
                        <Label>{product.description}</Label>
                        <div className="flex items-center">
                            <button
                                className="px-2"
                                onClick={() => decrementAmmount(product.id)}
                                >
                                -
                                </button>
                                <span className="px-2">{product.ammount}</span>
                                <button
                                className="px-2"
                                onClick={() => incrementAmmount(product.id)}
                                >
                                +
                            </button>
                        </div>                        
                        </div>
                    ))}
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione uma forma de pagamento" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Forma de Pagamento</SelectLabel>
                            <SelectItem value="money">Dinheiro</SelectItem>
                            <SelectItem value="pix">Pix</SelectItem>
                            <SelectItem value="credit">Crédito</SelectItem>
                            <SelectItem value="debit">Débito</SelectItem>
                            <SelectItem value="bolet">Boleto</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    </div>
                    <DialogFooter>
                    <span className="px-2">Total do pedido: R${total.toFixed(2)}</span>
                    <Button type="submit" disabled={total <= 0} onClick={handleConfirm}>Confirmar Pedido</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            </main>
            <Footer />
        </>
    )
} 