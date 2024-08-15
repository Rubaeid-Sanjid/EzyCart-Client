import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data)
        )
    },[])
    return (
        <div className="container mx-auto px-3 md:px-6 lg:px-12">
            <h1 className="text-3xl font-bold text-blue-600 my-8">EzyCart</h1>
            <div className="grid grid-cols-3 gap-6"> 
                {
                    products.map((product, index) => <Card key={index} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default Main;