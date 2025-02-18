'use client';

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";


const NavbarActions= async ()=>{
  
    const [isMounted, setIsmounted] = useState(false);

    useEffect(() => {
        setIsmounted(true)
    }, []);
    
    if(!isMounted){
        return null;
    }
    


    return(
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded bg-black px-4 py-2">
                <ShoppingBag
                 size={20}
                 color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">0</span>
                

            </Button>
        </div>
    )
}

export default NavbarActions;