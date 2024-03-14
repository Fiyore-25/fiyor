'use client';

import { Product } from "@/types";

interface ProductListsProp{
    title: string,
    items: Product[]
}


const ProductLists: React.FC<ProductListsProp> = async({items,title})=>{
    return(
        <div className="space-y-4">
            {title}
        </div>
    )
}

export default ProductLists;