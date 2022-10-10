import React, { useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'

const parseJSON = resp => (resp.json ? resp.json() : resp);

const Slug = ({ product }) => {
    const [modifiedData, setModifiedData] = useState({
        User_Name: '',
        User_Email: '',
        Address: '',
        Phone_Number: '',
        PinCode: '',
        State: '',
        District: '',
        order: product.attributes.Name,
        Payment: product.attributes.Price,
    })
    const handleSubmit = async e => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await fetch('http://localhost:1337/api/orders', {
            method: 'POST',
            headers,
            body: JSON.stringify({ data: modifiedData }),
        })
            .then(parseJSON);
    }
    const handleChange = ({ target: { name, value } }) => {
        setModifiedData(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    const router = useRouter();
    const { Slug } = router.query;

    return (
        <div>
            <Head>
                <title>Checkout - PlanetMarts</title>
            </Head>
            <div>
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-col text-center w-full">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mt-2">Checkout</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="lg:w-full md:w-2/3">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="User_Name" className="leading-7 text-sm text-gray-600">Name</label>
                                            <input required value={modifiedData.User_Name} onChange={handleChange} type="text" id="User_Name" name="User_Name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="User_Email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <input required value={modifiedData.User_Email} onChange={handleChange} type="email" id="User_Email" name="User_Email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="Address" className="leading-7 text-sm text-gray-600">Address</label>
                                            <textarea value={modifiedData.Address} onChange={handleChange} id="Address" name="Address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="Phone_Number" className="leading-7 text-sm text-gray-600">Phone Number</label>
                                            <input value={modifiedData.Phone_Number} onChange={handleChange} required maxLength={10} minLength={10} type='number' id="Phone_Number" name="Phone_Number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="PinCode" className="leading-7 text-sm text-gray-600">PinCode (Shipping only to India)</label>
                                            <input value={modifiedData.PinCode} onChange={handleChange} required maxLength={6} minLength={6} type="number" id="PinCode" name="PinCode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="State" className="leading-7 text-sm text-gray-600">State</label>
                                            <input value={modifiedData.State} onChange={handleChange} required type="text" id="State" name="State" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="District" className="leading-7 text-sm text-gray-600">District</label>
                                            <input value={modifiedData.District} onChange={handleChange} required type="text" id="District" name="District" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="cart w-full mx-5 h-auto py-1 text-black">
                                        <h1 className='text-black text-xl'>Review Items: </h1>
                                        <h3>
                                            <ol className='list-decimal ml-5 w-full'>
                                                <li>
                                                    <div className="mb-1 text-lg">
                                                        <span className="font-semibold">{product.attributes.Name} ({product.attributes.Colour}) Qty: 1</span>
                                                    </div>
                                                </li>
                                                <div id="id" className="p-2 w-full">
                                                    <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Checkout ₹{product.attributes.Price}</button>
                                                </div>
                                            </ol>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    let headers = { Authorazition: "Bearer   2215d5dff7a6bb9939e33dad1ad72ae27eba9e9d61cb7f927adf8c51db0c0b343a9036b01254f45c418d6f337a9e019a01dd6dbb6b2137c4d81f5e5a648717e66361f3fd7bc79e7e6dd08b964744f37e73fca091ad67412da05430f12bab9a6593de0c962ab7785b5ec43ee592e55b87c102dabd05eb9f91f7fa74605be8acc2" }
    let a = await fetch("http://localhost:1337/api/t-shirts?filters[Slug]=" + context.query.slug + "&populate=*", { headers: headers })
    let product = await a.json()
    return {
        props: { product: product.data[0] }
    }
}

export default Slug