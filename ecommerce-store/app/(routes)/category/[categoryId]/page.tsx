
import getCategories from "@/actions/get-categories";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filters";




interface CategoryPageProps{
    params:{
        categoryId: string;
    },
    searchParams:{
        colorId: string;
        sizeId: string;
    }
}

 export const revalidate = 0;



 const CategoryPage:React.FC<CategoryPageProps> = async ({params,searchParams})=>{


    const product = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    })

    const sizes = getSizes()
    const colors =getColors()
    const category = getCategories(params.categoryId);


    return(
        <div className="bg-white">
            <Container>
                <Billboard data={(await category).billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Add mobile filters */}
                        
                        <div className="hidden lg:block">
                            <Filter
                             valueKey = 'SizeId'
                             name = 'Sizes'
                             data= {sizes} />
                            <Filter
                             valueKey = 'ColorId'
                             name = 'Colors'
                             data= {colors} />
                            
                        </div>

                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products}

                        </div>
                    </div>

                </div>
            </Container>


        </div>
    )
 }
 
export default CategoryPage;