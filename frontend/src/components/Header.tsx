import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import { useBagStore } from '@/store/useBagStore';
import { useDialogStore } from '@/store/useDialogStore';

export const Header: React.FC = () => {
    const [user, setUser] = useState<any| null>(null);
    const { productsInBag } = useBagStore(); 
    const { open } = useDialogStore(); 
    
    const totalItems = Object.values(productsInBag).reduce(
      (acc, product) => acc + product.ammount,
      0
    );
    
    useEffect(()=>{
         const user_ = JSON.parse(localStorage.getItem("user")!);
         setUser(user_);        
    }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-[4rem] bg-primary flex items-center justify-between px-40 shadow-md z-50">
      <div className="text-white font-bold">Hi Food</div>
      <nav className="flex gap-4 items-center">
        <Label className='text-white'>{user?.email}</Label>
        <Button variant="ghost" className="text-white">Home</Button>
        <Button variant="ghost" className="text-white">Sobre</Button>
        <Button variant="ghost" className="text-white">Contato</Button>

        <div className="relative hover:cursor-pointer">
          <div onClick={
              open
            }>
            <ShoppingCartIcon className="w-8 h-8 text-white"  />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                {totalItems}
              </span>
            )}
            </div>
        </div>
      </nav>
    </header>
  );
};
