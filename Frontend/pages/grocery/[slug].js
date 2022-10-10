import Document from 'next/document';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Slug = ({ product, addToCart }) => {

    const router = useRouter();
    const { Slug } = router.query;
    const [size, setSize] = useState(product.attributes.Size);
    const [pin, setPin] = useState()
    const [service, setService] = useState()
    const checkServiceability = async () => {
        let pins = await fetch('http://localhost:3000/api/pincode')
        let pinJson = await pins.json()
        if (pinJson.includes(parseInt(pin))) {
            setService(true)
        }
        else {
            setService(false)
        }
    }
    const onChangePin = (e) => {
        setPin(e.target.value)
    }
    return (
        <div>
            <Head>
                <title>{product.attributes.Name}</title>
            </Head>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded shadow-lg" src={product.attributes.Image.data && product.attributes.Image.data.attributes.name} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest font-semibold">PLANETMARTS</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">{product.attributes.Name}</h1>
                            <p className="leading-relaxed">{product.attributes.Description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Quantity: {product.attributes.Quantity_Per_Kg_Gram} {product.attributes.Quantity}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">₹{product.attributes.Price}</span>
                                <button onClick={() => { addToCart(product.attributes.Slug, 1, product.attributes.Name, product.attributes.Price, product.attributes.Category, product.attributes.Quantity_Per_Kg_Gram + product.attributes.Quantity, product.attributes.Image.data && product.attributes.Image.data.attributes.name) }} className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Add To Cart</button>
                                <Link href={`/checkout/${product.attributes.Slug}`}><button className="flex ml-3 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Buy Now</button></Link>
                            </div>
                            <div className="relative flex">
                                <input onChange={onChangePin} type="number" id="number" name="number" placeholder='Enter Your Pincode' className="mt-3 w-80 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <button onClick={checkServiceability} className="mt-3 lg:ml-2 ml-auto text-white bg-pink-500 border-0 py-2 px-6 hover:bg-pink-600 rounded">Check</button>
                            </div>
                            {!service && service != null && <div className='text-red-700 mt-3'>
                                Sorry! We do not deliver to this pincode yet.
                            </div>}
                            {service && service != null && <div className='text-green-700 mt-3'>
                                Yay! This pincode is serviceable.
                            </div>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps(context) {
    let headers = { Authorazition: "Bearer   2215d5dff7a6bb9939e33dad1ad72ae27eba9e9d61cb7f927adf8c51db0c0b343a9036b01254f45c418d6f337a9e019a01dd6dbb6b2137c4d81f5e5a648717e66361f3fd7bc79e7e6dd08b964744f37e73fca091ad67412da05430f12bab9a6593de0c962ab7785b5ec43ee592e55b87c102dabd05eb9f91f7fa74605be8acc2" }
    let a = await fetch("http://localhost:1337/api/groceries?filters[Slug]=" + context.query.slug + "&populate=*", { headers: headers })
    let product = await a.json()
    return {
        props: { product: product.data[0] }
    }
}

export default Slug