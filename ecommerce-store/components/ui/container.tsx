'use client';

interface Containerprops{
    children:React.ReactNode;
}

const Container: React.FC<Containerprops> = ({
    children,
})=>{
    return (
        <div className="max-auto max-w-7xl">
            {children}
        </div>
    )

}


export default Container;