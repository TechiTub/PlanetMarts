import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

const grocery = (props) => {
  return (
    <section class="text-gray-600 body-font">
      <Head>
        <title>Grocery -- PlanetMarts</title>
      </Head>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap-reverse -m-4">
          {props.product.data.map((item) => {
            return (
              <Link href={`/grocery/${item.attributes.Slug}`}>
                <div class="lg:w-1/4 hover:shadow-lg border border-gray-200 rounded-md cursor-pointer ml-3 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={item.attributes.Image.data && item.attributes.Image.data.attributes.name} />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.attributes.Category}</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">{item.attributes.Name}</h2>
                    <p class="mt-1">₹{item.attributes.Price}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  let headers = { Authorazition: "Bearer   2215d5dff7a6bb9939e33dad1ad72ae27eba9e9d61cb7f927adf8c51db0c0b343a9036b01254f45c418d6f337a9e019a01dd6dbb6b2137c4d81f5e5a648717e66361f3fd7bc79e7e6dd08b964744f37e73fca091ad67412da05430f12bab9a6593de0c962ab7785b5ec43ee592e55b87c102dabd05eb9f91f7fa74605be8acc2" }
  let a = await fetch("http://localhost:1337/api/groceries?populate=*", { headers: headers })
  let product = await a.json()
  return {
    props: { product: product }
  }
}

export default grocery