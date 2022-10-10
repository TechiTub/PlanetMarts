import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const tshirts = (props) => {
    return (
        <div>
            <Head>
                <title>Tshirts -- PlanetMarts</title>
            </Head>
            <div className="main">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap-reverse -m-4">
                            {props.product.data.map((item) => {
                                return (
                                    <Link href={`/tshirts/${item.attributes.Slug}`}>
                                        <div className="cursor-pointer lg:w-1/6 md:w-1/2 lg:h-auto p-4 w-full hover:shadow-lg border border-gray-200 rounded-md ml-3">
                                            <a className="block relative h-60 rounded px-1 overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.attributes.Image.data && item.attributes.Image.data.attributes.name} />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 font-semibold text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.attributes.Name}</h2>
                                                <p className="mt-1">₹{item.attributes.Price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    let headers = { Authorazition: "Bearer   2215d5dff7a6bb9939e33dad1ad72ae27eba9e9d61cb7f927adf8c51db0c0b343a9036b01254f45c418d6f337a9e019a01dd6dbb6b2137c4d81f5e5a648717e66361f3fd7bc79e7e6dd08b964744f37e73fca091ad67412da05430f12bab9a6593de0c962ab7785b5ec43ee592e55b87c102dabd05eb9f91f7fa74605be8acc2" }
    let a = await fetch("http://localhost:1337/api/t-shirts?populate=*", { headers: headers })
    let product = await a.json()
    return {
        props: { product: product }
    }
}

export default tshirts