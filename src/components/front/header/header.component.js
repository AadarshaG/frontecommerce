import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillHeart,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdHelp} from 'react-icons/md'
import {FaWallet,FaUserFriends} from 'react-icons/fa'

export function Header(){

    const [nav, setNav] = useState(false)

    // const ToggleNav = () => {
    //     setNav(nav)
    // }

    return(
            <div className="mx-w-[1240px] mx-auto flex justify-between items-center p-4">
                 {/* left side */}
                <div className="flex flex-center">
                    <div onClick={() =>setNav(!nav)} className="cursor-pointer">
                        <AiOutlineMenu  size={25} />
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                        Best <span className="font-bold">Eats</span>
                    </h1>
                    <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                        <p className="bg-black text-white rounded-full p-2">Delivery</p>
                        <p className="p-2">Package</p>
                    </div>
                </div>

                {/* search */}
                <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                    <AiOutlineSearch size={25} />
                    <input className="bg-transparent p-2 focus:outline-none w-full" type="text" placeholder="Search"></input>
                </div>

                {/* cart */}
                <button className="bg-black text-white hidden md:flex items-center border border-black rounded-full py-1 px-5">
                    <BsFillCartFill size={20} className="mr-2" /> Cart
                </button>
                
                {/* mobile menu */}
                {/* overlay */}
                { nav ? <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-10 "></div> : ""}
                {/* side drawer menu */}
                <div className={ nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                    <AiOutlineClose onClick={() => setNav(!nav)} size={20} className="absolute right-4 top-4 cursor-pointer" />
                    <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
                    <nav>
                        <ul className="flex flex-col p-4 text-gray-800 ">
                            <li className="text-xl py-4 flex left-4"><TbTruckDelivery size={25} className="mr-4" />Orders</li>
                            <li className="text-xl py-4 flex left-4"><AiFillHeart size={25} className="mr-4" />Favorites</li>
                            <li className="text-xl py-4 flex left-4"><FaWallet size={25} className="mr-4" />Wallet</li>
                            <li className="text-xl py-4 flex left-4"><MdHelp size={25} className="mr-4" />Help</li>
                            <li className="text-xl py-4 flex left-4"><AiFillTag size={25} className="mr-4" />Promotions</li>
                            <li className="text-xl py-4 flex left-4"><BsFillSaveFill size={25} className="mr-4" />Best Ones</li>
                            <li className="text-xl py-4 flex left-4"><FaUserFriends size={25} className="mr-4" />Invite Friends</li>
                           
                        </ul>
                    </nav>
                </div>
            </div>
    )
}