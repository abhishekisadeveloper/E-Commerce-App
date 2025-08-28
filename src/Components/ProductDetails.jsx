import { useEffect, useState } from 'react';
import { useParams } from 'react-router'

const ProductDetails = () => {
    const [productInfo, setProductInfo] = useState(null);
    const {id} = useParams()
    console.log(id);
    
  
    useEffect( () => {
        const productsById = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
            const data = await response.json();
            console.log(data.products);
            setProductInfo(data)
        }
        productsById()
    },[id])
    return(
        <>
        <div className="">{productInfo?.title}</div>
        <img src={productInfo?.thumbnail} alt="" />
        </>
    );
}

export default ProductDetails