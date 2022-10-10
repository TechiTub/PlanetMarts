import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiFillCloseCircle, AiFillShopping, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { IoCart } from 'react-icons/io5'
import { MdAccountCircle } from 'react-icons/md'
import { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    const [dropdown, setDropdown] = useState(false);
    const droping = () => {
        if (dropdown == false) {
            setDropdown = true;
        }
        else {
            setDropdown = false;
        };
    };
    

    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-full")
            ref.current.classList.add("translate-x-0")
            ref.current.classList.add("mr-7")
        }
        else if (!ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-0")
            ref.current.classList.add("translate-x-full")
            ref.current.classList.remove("mr-7")
        }
    }


    const ref = useRef()

    return (
        <div>
            <header className="text-gray-600 body-font shadow-lg lg:h-20 sm:h-56">
                <div className="container mx-auto flex flex-wrap my-auto p-5 flex-col md:flex-row items-center">
                    <Link href={'/'}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image height={40} width={40} className='h-10 w-10' src='/../public/logo.jpg' />
                        <span className="ml-3 text-xl">PlanetMarts.com</span>
                    </a></Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/"><a className="mr-5 hover:text-pink-600 text-lg text-black">Home</a></Link>
                        <Link href="/tshirts"><a className="mr-5 hover:text-pink-600 text-lg text-black">Tshirts</a></Link>
                        <Link href="/mugs"><a className="mr-5 hover:text-pink-600 text-lg text-black">Mugs</a></Link>
                        <Link href="/hooddies"><a className="mr-5 hover:text-pink-600 text-lg text-black">Hooddies</a></Link>
                        <Link href="/grocery"><a className="mr-5 hover:text-pink-600 text-lg text-black">Grocery</a></Link>
                    </nav>
                    <button onClick={toggleCart} className="inline-flex items-center text-white md:ml-3  border px-2 focus:outline-none rounded text-base mt-4 h-8 py-1 active:bg-gray-100 md:mt-0"><IoCart className='text-pink-600 h-full w-full' /></button>
                </div>

                <div ref={ref} className="sideCart mt-2 shadow-md rounded-md pr-1 z-10 bg-white border lg:w-1/3 sm:w-72 overflow-x-hidden absolute right-0 transform transition-transform translate-x-full lg:h-auto text-black">
                    <div className="cross absolute top-2 right-2 text-2xl cursor-pointer"><AiFillCloseCircle onClick={toggleCart} className='text-red-500' /></div>
                    <h2 className='mt-3 font-bold mb-5 text-2xl text-black text-center w-full'>Shopping Cart</h2>
                    {Object.keys(cart).length == 0 &&
                        <div className='font-semibold mb-10 text-xl text-black text-center w-full'>Your Cart is empty !</div>}<ol className='list-decimal ml-5 w-full'>
                        <div>
                            {Object.keys(cart).map((k) => {
                                return <li key={k}>
                                    <div className="mb-5 text-md">
                                        <span className="font-semibold">{cart[k].name} ({cart[k].color}, {cart[k].size}) <div className='w-20 flex text-black'>Qty: <div className='text-2xl'><button onClick={() => { addToCart(k, 1, cart[k].name, cart[k].price, cart[k].size, cart[k].color) }}><AiFillPlusCircle className='text-green-600 mx-1 cursor-pointer' /></button></div> {cart[k].qty} <div className='text-2xl'><button onClick={() => { removeFromCart(k, 1, cart[k].name, cart[k].price, cart[k].size, cart[k].color) }}><AiFillMinusCircle className='text-red-600 mx-1 cursor-pointer' /></button></div></div></span>
                                    </div>
                                </li>
                            })}
                        </div>
                        <div className="my-3 font-semibold">Subtotal: ₹{subTotal}</div>
                        {Object.keys(cart).length != 0 &&
                            <div className="btns flex items-center">
                                <Link href={"/checkout"}><button onClick={toggleCart} className="inline-flex items-center mb-3 text-white bg-pink-500 hover:bg-pink-600 active:bg-pink-800 border-0 py-2 p-3 focus:outline-none rounded text-base mt-4 md:mt-0"><AiFillShopping className="mx-1 text-white" />Checkout</button></Link>
                                <button onClick={clearCart} className="inline-flex items-center mb-3 text-white bg-pink-500 hover:bg-pink-600 active:bg-pink-800 md:ml-3 border-0 py-2 px-3 ml-3 focus:outline-none rounded text-base mt-4 md:mt-0">Clear Cart</button>
                            </div>}
                        {Object.keys(cart).length == 0 &&
                            <div className="btns flex items-center">
                                <button onClick={toggleCart} className="inline-flex items-center mb-3 text-white bg-pink-300 cursor-default border-0 py-2 p-3 focus:outline-none rounded text-base mt-4 md:mt-0"><AiFillShopping className="mx-1 text-white" />Checkout</button>
                                <button className="inline-flex items-center mb-3 text-white bg-pink-300 cursor-default md:ml-3 border-0 py-2 px-3 ml-3 focus:outline-none rounded text-base mt-4 md:mt-0">Clear Cart</button>
                            </div>
                        }
                    </ol>
                </div>
            </header>
        </div>
    )
}

export default Navbar