import axios from 'axios'
import Products from './components/Products';
import Details from "./components/Details";
import Home from './components/Home'
import Navbar from './components/Navbar';
import Author from './components/Author';
import { useState , useEffect } from "react";
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'

function App() {

  const [data,setData] = useState([])
  useEffect(() =>{
    async function getApi(){ 
      try{
        const response = await axios.get('https://dummyjson.com/products/')
        // console.log(response.data.products,'res')
        setData(response.data.products)
        // console.log(data,'data')
      }catch(error){
        console.log(error)
      }
    } 
    getApi()
  }, []);

  // useEffect(()=>{
  //   const getApi = async () => {
  //     const response = await axios.get('https://dummyjson.com/products/')
  //     setData(response.data.products)
  //     // console.log(data,'data')
  //     console.log(response.data.products,'res')
  //   };
  //   getApi();
  // }, [] );

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products itemdata={data}/>}></Route>
        <Route path="/products/:id" element={<Details/>}></Route>
        <Route path="/author" element={<Author/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
