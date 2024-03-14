'use client';

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import UseCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";

const CartPage = () => {
    
    const cart = UseCart();

    const [isMounted,setIsMounted]= useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[])
      
    if(!isMounted){
        return null;
    }

    const cartMessage = 'Shooping cart'



    return (  
        <div className="bg-white">
            <Container>
                <div className="px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black"> 
                    {cartMessage} </h1>

                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && 
                            <p className="text-neutral-500">
                             No items added to cart
                             </p> }

                            <ul>
                                {cart.items.map((item)=>(
                                    <CartItem key= {item.id} data ={item} />
                                ))}
                            </ul>
                        </div>
                        <Summary/>


                    </div>
                </div>
            </Container>
        </div>
    );
}
 
export default CartPage;