import { useEffect } from "react";

const Main = () => {
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data)
        )
    },[])
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-600">EzyCart</h1>
        </div>
    );
};

export default Main;