'use client';

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-buttons";
import Currency from "@/components/ui/currency";
import UseCart from "@/hooks/use-cart";

import { Product } from "@/types";

interface CartItemprops{
    data:Product;

}

const CartItem: React.FC<CartItemprops> = ({data}) => {
    return (  
        <div></div>
    );
}
 
export default CartItem;