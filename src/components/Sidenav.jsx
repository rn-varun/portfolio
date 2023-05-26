import React, {useState} from 'react'
import { AiOutlineHome, AiOutlineMenu, AiOutlineLaptop, AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from "react-icons/bs";


const Sidenav = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        console.log('nav button - state changed')
    }
  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-5 left-5 z-[99] md:hidden'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-[#dde0af]/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href='#home' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                        <AiOutlineHome size={20}/>
                        <span className='w-[75%] pl-4 justify-center'>Home</span>
                    </a>
                    <a onClick={handleNav} href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                        <AiOutlineLaptop size={20}/>
                        <span className='w-[75%] pl-4 justify-center'>Work Experience</span>
                    </a>
                    <a onClick={handleNav} href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                        <BsPerson size={20}/>
                        <span className='w-[75%] pl-4 justify-center'>Resume</span>
                    </a>
                    <a onClick={handleNav} href='#home' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                        <AiOutlineMail size={20}/>
                        <span className='w-[75%] pl-4 justify-center'>Contact me</span>
                    </a>
                </div>
            ) : (
                ''
            )
        }
        <div  className='md:block hidden fixed top-[30%] z-10 right-4'>
            <div className='flex flex-col'>
                <a href="#home" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                    <AiOutlineHome size={25}/>
                </a>
                <a href="#work" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                    <AiOutlineLaptop size={25}/>
                </a>
                <a href="#work" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                    <BsPerson size={25}/>
                </a>
                <a href="#contact" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                    <AiOutlineMail size={25}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sidenav