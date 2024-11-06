import { Product } from '@/models';
import { useBagStore } from '@/store/useBagStore';
import React from 'react';

const ProductCard: React.FC<Product> = (product: Product) => {
  const { addProduct } = useBagStore();

  function handleAddProduct(){
    addProduct({id: product.id, 
      description: product.description, 
      value: product.value, 
      ammount: 1});
  }
  
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-72 w-60 transition-transform duration-500 transform hover:scale-105 hover:shadow-primary/60">
      <div className="h-1/2">
        <img src={product.srcImage} alt={product.description} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow p-4">
        <h3 className="text-lg font-semibold">{product.description}</h3>
        <p className="text-gray-700">{product.value}</p>
      </div>
      <div>
        <button className="w-full bg-primary text-white py-2 rounded-md" onClick={handleAddProduct}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
