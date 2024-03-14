

import {create} from 'zustand';

import { Product } from '@/types';
import { createJSONStorage, persist } from 'zustand/middleware';
import toast from 'react-hot-toast';

interface CartStoreProps{
  items:Product[];
  addItem:(data:Product)=>void;
  removeItem:(id:string)=>void;
  removeAll:()=>void;
        
}

const UseCart = create (persist<CartStoreProps>((set,get)=>({
    items:[],
    addItem:(data:Product)=>{
        const currentItem = get().items;
        const existingItems =currentItem.find((item)=> item.id === data.id);

        if(existingItems){
            return toast('item alrady in cart.')
        };

        set({items: [...get().items,data]});
        toast.success("item added to cart.");
    },

    removeItem:(id:string)=>{
        set({items: [...get().items.filter((item) =>item.id !== id)]});
        toast.success('item removed from the cart.');
    },
     
    removeAll:()=> set({items: []})

}),{
    name: 'cart-storage',
    storage: createJSONStorage(()=>localStorage)

}))

export default UseCart;