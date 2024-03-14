'use client';

import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductLists from "@/components/product-lists";
import Container from "@/components/ui/container";

interface ProductIdPageProps{
    params:{
        productId:string;
    }
}


const ProductIdPage:React.FC<ProductIdPageProps> =  async ({params})=>{

    const product = await getProduct(params.productId)
 
    const suggestedProducts = await getProducts({
        categoryId: product?.categories?.id
    })

    return(
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images= {product.images}/>
                        
                        <div className="mt-10 sm:mt-16 px-4 sm:px-0 lg:mt-0">
                            {/* Info */}
                            Info

                        </div>

                    </div>
                    <hr className="my-10"/>
                    <ProductLists  title="Realted items" items={suggestedProducts}/>
                </div>
            </Container>

        </div>
    )
}

export default ProductIdPage;