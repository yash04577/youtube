import Context from '@mui/base/TabsUnstyled/TabsContext'
import { Home, HomeOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'

const Sidebar = () => {

    const context = useContext(Context)

  return (
    <div className='w-[15%] h-[93vh] overflow-y-scroll'>
        <ul className='flex gap-5 flex-col mt-6 h-full'>

            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("new")}>New</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("music")}>Music</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("rajpal yadav")}>Rajpal Yadav</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("kapil sharma")}>Kapil Sharma</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("cricket")}>Cricket</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("ipl")}>IPL</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("sports")}>Sports</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("news")}>News</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("drama")}>Drama</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("movies")}>Movies</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("javascript")}>Javascript</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("game")}>Game</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("football")}>Football</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("react")}>React js</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("doremon")}>Doremon</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("sinchan")}>Sinchan</button>
            </li>
            <li className='flex justify-start items-center gap-3 group hover:bg-red-600 rounded-lg py-[10px] ml-[10px]'>
                <Home className='ml-6 text-red-600 group-hover:text-white'></Home>
                <button className='text-white' onClick={()=>context.setQuery("flight")}>flight</button>
            </li>
           
        </ul>
    </div>
  )
}

export default Sidebar