import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data)
        )
    },[])
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-600">EzyCart</h1>
            <h3>{products.length}</h3>
        </div>
    );
};

export default Main;