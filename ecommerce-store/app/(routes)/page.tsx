'use client';

import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductLists from "@/components/product-lists";
import Container from "@/components/ui/container";

export const revalidate= 0;

const HomePage = async ()=>{
  const products = await getProducts({isFeatured:true})

    //  const billboards = await getBillboard(id) 


    return(
      <Container>
        <div className="space-y 10 pb-10">
            <Billboard 
            data={[]}/>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductLists title= 'isFeatured' items= {products}/>
        </div>
        </div>

      </Container>
    )
}

export default HomePage;