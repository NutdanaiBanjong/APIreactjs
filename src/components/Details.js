import { useParams } from "react-router-dom"
import { useState , useEffect } from 'react'
import axios from 'axios'

const Details = () => {

  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() =>{
    async function getProduct(){ 
      try{
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        // console.log(response.data.products,'res')
        setProduct(response.data)
        // console.log(product,'products')
      }catch(error){
        console.log(error)
      }
    } 
    getProduct()
  }, [id]);
// console.log(id,'id')
// console.log(product,'product')

  return (
    <div className="text-center mt-2">
      <h1>หน้ารายละเอียดสินค้า</h1>
      <div className="space-y-1">
        <h1>สินค้าชิ้นที่ : {product.id}</h1>
        <h1>ชื่อสินค้า : {product.title}</h1>
        <h1>ราคาสินค้า : {product.price} บาท</h1>
        <h1>รายละเอียด : {product.description}</h1>
      </div>
    </div>
  )
}

export default Details;