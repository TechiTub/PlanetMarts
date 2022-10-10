import Head from 'next/head';
import { useState } from 'react';

// Parses the JSON returned by a network request
const parseJSON = resp => (resp.json ? resp.json() : resp);
// Checks if a network request came back fine, and throws an error if not
const checkStatus = resp => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp;
    }
    return parseJSON(resp).then(resp => {
        throw resp;
    });
};
const headers = {
    'Content-Type': 'application/json',
};

const checkout = ({ allCategories, errorCategories, cart, subTotal }) => {
    let myCart = parseJSON(cart);
    const [carter, setCarter] = useState(myCart);
    let number = Math.floor(1000000 * Math.random());
    const [unique, setUnique] = useState(number);
    let money = subTotal;
    const [total, setTotal] = useState(subTotal)
    const [modifiedData, setModifiedData] = useState({
        User_Name: '',
        User_Email: '',
        Address: '',
        Phone_Number: '',
        PinCode: '',
        State: '',
        District: '',
        Order: myCart,
        Payment_Status: 'Done',
        Order_Id: number,
        Payment: money,
    });
    const [errorRestaurants, setErrorRestaurants] = useState(null);

    const handleChange = ({ target: { name, value } }) => {
        setModifiedData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:1337/api/orders', {
                method: 'POST',
                headers,
                body: JSON.stringify({ data: modifiedData }),
            })
                .then(checkStatus)
                .then(parseJSON);
        } catch (error) {
            setErrorRestaurants(error);
        }
    };

    if (errorCategories) {
        return <div>An error occured (categories): {errorCategories.message}</div>;
    }
    if (errorRestaurants) {
        return <div>An error occured (restaurants): {errorRestaurants.message}</div>;
    }

    return (
        <div>
            <Head>
                <title>Checkout - PlanetMarts</title>
            </Head>
            {Object.keys(cart).length == 0 &&
                <div className='font-semibold mb-10 text-xl text-black text-center w-full'>You haven't add any products in your cart...Please add product to checkout</div>}
            {Object.keys(cart).length != 0 &&
                <div>
                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5 mx-auto overflow-y-hidden">
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
                                        <div className="cart w-full overflow-hidden mx-5 h-auto py-1 text-black">
                                            <h1 className='text-black text-xl'>Review Cart Details: </h1>
                                            <h3>
                                                <ol className='list-decimal ml-5 w-full'>
                                                    {Object.keys(cart).map((k) => {
                                                        return <li key={k}>
                                                            <div className="mb-1 text-lg">
                                                                <span value={carter} className="font-semibold">{cart[k].name} ({cart[k].color}, {cart[k].size}) Qty: {cart[k].qty}</span>
                                                            </div>
                                                        </li>
                                                    })}
                                                    <div id="id" className="p-2 w-full">
                                                        <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Checkout ₹{subTotal}</button>
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
            }
        </div>
    );
};

checkout.getInitialProps = async ctx => {
    try {
        const allCategories = await fetch('http://localhost:1337/api/orders', {
            method: 'GET',
            headers,
        })
            .then(checkStatus)
            .then(parseJSON);
        return { allCategories };
    } catch (errorCategories) {
        return { errorCategories };
    }
};
export default checkout;