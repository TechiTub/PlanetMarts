import Link from 'next/link'
import React from 'react'

const aboutus = () => {
    return (
        <div>
            <div className='text-center w-full mx-auto text-gray-700'>
                <img src='logo.jpg' className="ml-auto mr-auto w-28 h-28 mb-8 mt-16" />
                <h1 className="text-4xl mt-2 mb-3 font-semibold text-black">About PlanetMarts</h1>
                <div className="text-lg">
                    <p className="text-xl text-black mb-3">Welcome to PlanetMarts.com</p>
                    <h2 className='text-lg text-center text-black'>BUY WHATEVER YOU WANT TO AT REASONABLE PRICE !</h2>
                    <p className='mb-4 leading-relaxed text-center'>
                        Buy yourself a trendy product from Planetmarts.com ;) !
                    </p>
                    <p>This site is being created to deliver the product to customer for free.</p><p>We try to provide the best quality products to our customer.</p>
                </div>
            </div>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="text-center mb-10">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-2">Services We Provide</h1>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Authentic Cliche Forage</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Kinfolk Chips Snackwave</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Coloring Book Ethical</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Typewriter Polaroid Cray</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Pack Truffaut Blue</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">The Catcher In The Rye</span>
                                </div>
                            </div>
                        </div>
                        <Link href={'/tshirts'}><button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Start Shopping</button></Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default aboutus