import { NavLink } from 'react-router-dom'

const Home = () =>{
  return(
    <div className='text-center'>
      <h1>Home</h1>
      <p>React Get API</p>
      <button className='border border-black mt-5'>           
        <NavLink to="/products" className="">ไปหน้า Products</NavLink>
      </button>
    </div>
 );
};

export default Home;