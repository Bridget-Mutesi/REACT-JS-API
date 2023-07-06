import React, {useState, useEffect} from "react";

const Products = ()=>{
    const [products, setProducts] = useState([]); /// use state it holds the useEffect
    // setLoading 

    useEffect(()=>{                           //use effect 
        (async ()=>{
            await getProducts();    // async function
        })();
        getProducts()

    }, []);

    const getProducts = async () =>{
       try{
        const response = await fetch('https://dummyjson.com/products')
        const result = await response.json();
        setProducts(result, products);
        // setLoading(false);
       }
       catch(error){
        console.log(error.message);
       }
    }
    console.log({products});
    // if(loading){
    //     return <h1>Loading...</h1>
    // }

    return(
        <div>
            {products.map(item =>(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                </div>

            ))}
        </div>

    );
};
export default Products;