import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 bg-gray-100 shadow-md body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link href={'/'}>
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                <Image height={50} width={50} src='/../public/logo.jpg' />
                                <span className="ml-3 text-xl">PlanetMarts.com</span>
                            </a>
                        </Link>
                        <p className="mt-2 text-sm text-gray-500">Shop whatever you want to at resonable price!!!</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={'/tshirts'}>
                                    <a className="text-gray-600 cursor-pointer hover:text-pink-600">Tshirts</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/mugs'}>
                                    <a className="text-gray-600 cursor-pointer hover:text-pink-600">Mugs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/hooddies'}>
                                    <a className="text-gray-600 cursor-pointer hover:text-pink-600">Hooddies</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/grocery'}>
                                    <a className="text-gray-600 cursor-pointer hover:text-pink-600">Grocery</a>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CUSTOMER SERVICE</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={'/contactus'}>
                                    <a className="text-gray-600 cursor-pointer hover:text-pink-600">Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/aboutus'}>
                                    <a className="text-gray-600 cursor-pointer hover:text-pink-600">About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/returnpolicy'}>
                                    <a className="text-gray-600 cursor-pointer hover:text-pink-600">Return Policy</a>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POLICY</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={'/privacypolicy'}>
                                    <a className="text-gray-600 cursor-pointer hover:text-pink-600">Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/termsandconditons'}>
                                    <a className="text-gray-600 cursor-pointer hover:text-pink-600">Terms and Conditions</a>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <Image height={50} width={270} src='/../public/pay.png' />
                    </div>
                </div>
                <div className="bg-gray-100 border-t">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 PlanetMarts.com — All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer