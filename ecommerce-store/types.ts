
export interface Billboard{
    id: string;
    label:string;
    imageUrl: string
    categories: Category;
};

export interface Category{
    id: string;
    name:string;
    billboard: Billboard;
}
export interface Product{
    id: string;
    name:string;
    items:string;
    billboard: Billboard;
    sizes: Size;
    colors: Color
    categories: Category;
    images:string;
    price: string;
    
}
export interface Size{
    id: string;
    name:string;
    value:string;
    billboard: Billboard;
    categories: Category;
    images:string;
    price: string;
    
    
}
export interface Color{
    id: string;
    name:string;
    value:string;
    billboard: Billboard;
    categories: Category;
    images:string;
    price: string;
    
    
}

export interface Image{
    id: string;
    url:string;
    name:string;
    billboard: Billboard;
    categories: Category;
    images:string;
    price: string;
    
}

