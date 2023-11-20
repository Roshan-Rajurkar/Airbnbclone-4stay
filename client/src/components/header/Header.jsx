import React from 'react'
import { MdOtherHouses } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
    return (
        <div className='flex justify-between items-center p-5 border-b-2 border-red'>
            <div className="text-rose-400 font-bold text-3xl">
                <a href="/" className='flex items-center gap-1 cursor-pointer'> <MdOtherHouses />4stay</a>
            </div>
            <div className='w-3/5 h-10 flex justify-center items-center border-x border-y border-inherit'>
                <input type="text" className='w-full h-full p-2 outline-none text-sm ' placeholder='Search here...' />
                <RiSearch2Line className='text-2xl text-stone-300' />
            </div>
            <div className='border-x border-y border-stone-300 text-stone-500 border-red-400 rounded-3xl px-3 py-1'>
                <button className='flex gap-2 text-3xl items-center'>
                    <IoMenuOutline />
                    <img className='w-9 h-9 border-2 rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Header