import { Search, SearchOffOutlined, SearchOutlined } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo2.png"
import Context from '../context/Context';
const Navbar = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const context = useContext(Context);

    const clickHandler = () =>{
        navigate("/")
        context.setQuery(query);

    }

  return (
    <nav className='bg-black flex justify-between '>
        <img src={logo} alt="YouTube" className='w-[100px] h-[40px] ' />
        <input 
            type="text" 
            name="" 
            id="" 
            value={query}
            onChange={(event)=>setQuery(event.target.value)}
            placeholder='Search...'
            className='bg-black border border-gray-400 rounded text-white w-[30%] relative'
            
        />

        <SearchOutlined onClick={clickHandler} className='text-white text-2xl absolute right-2 top-2' ></SearchOutlined>
    </nav>
  )
}

export default Navbar