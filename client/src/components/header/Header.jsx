import React from 'react'
import { MdOtherHouses } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b border-gray-400'>
            <div className="text-rose-400 font-bold text-2xl ">
                <a href="/" className='flex items-center gap-1 cursor-pointer'> <MdOtherHouses className='w-10 h-10' /><span className='hidden sm:block md:block'>4stay</span></a>
            </div>
            <div className='flex border rounded-full px-5 py-3 pr-2 gap-4 border-b-2 hover:shadow-md text-sm-1 cursor-pointer'>
                <div className='font-medium'>Anywhere</div>
                <div className='border-l border-gray-400'></div>
                <div className='font-medium'>Any week</div>
                <div className='border-l border-gray-400'></div>
                <div className='flex gap-4 '>
                    <div className='text-gray-400'>Add guests</div>
                    <IoSearch className='text-3xl text-white bg-primary p-1 rounded-full w-7 h-7 my-auto' />
                </div>
            </div>

            <div className='flex border rounded-full px-4 py-2 gap-4 border-b-2 hover:shadow-md text-sm-1 cursor-pointer'>
                <button className='flex gap-2 text-3xl items-center'>
                    <IoMenuOutline className='text-gray-500' />
                    <img className='w-6 h-6 border-2 rounded-full border-gray-500' src="https://media.licdn.com/dms/image/C5603AQGpu5hQFzCBoQ/profile-displayphoto-shrink_400_400/0/1658325820345?e=2147483647&v=beta&t=qwAmjlFfuvnvPhP0lKgHPhq-JgicXzjRT5EdQMK2pcM" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Header