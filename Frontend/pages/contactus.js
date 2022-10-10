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

const Home = ({ allCategories, errorCategories }) => {
    const [modifiedData, setModifiedData] = useState({
        name: '',
        message: '',
        email: '',
        categories: [],
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
            const response = await fetch('http://localhost:1337/api/contacts', {
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

    const renderCheckbox = category => {
        const { categories } = modifiedData;
        const isChecked = categories.includes(category.id);
        const handleCheckboxChange = () => {
            if (!categories.includes(category.id)) {
                handleChange({ target: { name: 'categories', value: categories.concat(category.id) } });
            } else {
                handleChange({
                    target: { name: 'categories', value: categories.filter(v => v !== category.id) },
                });
            }
        };
        return (
            <div key={category.id}>
                <label htmlhtmlFor={category.id}>{category.attributes.name}</label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    name="categories"
                    id={category.id}
                />
            </div>
        );
    };

    if (errorCategories) {
        return <div>An error occured (categories): {errorCategories.message}</div>;
    }
    if (errorRestaurants) {
        return <div>An error occured (restaurants): {errorRestaurants.message}</div>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Contact us for any issue, help or query...</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input value={modifiedData.name} onChange={handleChange} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input value={modifiedData.email} onChange={handleChange} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea value={modifiedData.message} onChange={handleChange} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
};

Home.getInitialProps = async ctx => {
    try {
        const allCategories = await fetch('http://localhost:1337/api/contacts', {
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
export default Home;
