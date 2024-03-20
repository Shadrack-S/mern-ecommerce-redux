import axios from 'axios';
import React from 'react';
import { FaRegStar, FaStar, FaShoppingCart } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
    try {
        const productId = params.productId;
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
        if (res.status !== 200) {
            throw new Error('Failed to fetch product data');
        }
        const product = res.data;
        return { product };
    } catch (error) {
        console.error('Error fetching product data:', error.message);
        return { product: null, error: error.message };
    }
}

const Product = () => {
    const { product } = useLoaderData();
    console.log(product);

    const sellingprice = product.price;
    const mrp = product.maxprice;
    const deducted = mrp - sellingprice;
    const percent = Math.floor((deducted / mrp) * 100);


    return (
        <main className='container mx-auto px-4 py-8 h-full'>
            <section className='flex flex-row gap-16'>
                <div className='grid grid-cols-4 grid-rows-4 gap-2 w-[50%] '>
                    {/* First three images occupy the first column and each spans one row. */}
                    <img
                        className="row-start-1 row-span-1 col-span-1 w-full h-full object-cover"
                        src={product.images[0]}
                        alt="image 1"
                    />
                    <img
                        className="row-start-2 row-span-1 col-span-1 w-full h-full object-cover"
                        src={product.images[1]}
                        alt="image 2"
                    />
                    <img
                        className="row-start-3 row-span-1 col-span-1 w-full h-full object-cover"
                        src={product.images[2]}
                        alt="image 3"
                    />
                    {/* Fourth image starts from the second column and spans the rest. */}
                    <img
                        className="row-start-1 row-span-3 col-start-2 col-span-3 w-full h-full object-center object-cover"
                        src={product.thumbnail}
                        alt="Product 4"
                    />
                </div>

                <div className='flex flex-col'>
                    <div className="static-height-container">
                        <h1 className='font-bold text-2xl mb-4'>{product.title}</h1>
                        <span className='text-2xl font-semibold text-slate-700'>
                            <span>&#8377;{product.price}</span>
                            <span className='text-sm text-slate-600 line-through ml-5'>&#8377;{product.maxprice}</span>
                            <span className='text-red-500 text-sm font-bold ml-2'>-{percent}% OFF</span>
                        </span>
                        <div className='flex items-center mt-4'>
                            <div className='flex text-[#FFD700]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                            </div>
                            <span className='text-xs ml-2'>(500+)</span>
                        </div>

                        <p className='max-w-lg mt-4'>{product.description}</p>

                        <ul className='flex justify-center flex-row mt-5 p-5 gap-4 '>
                            <li className='bg-slate-200 h-10 w-10 rounded-full flex justify-center items-center font-semibold hover:underline'>S</li>
                            <li className='bg-slate-200 h-10 w-10 rounded-full flex justify-center items-center font-semibold hover:underline'>M</li>
                            <li className='bg-slate-200 h-10 w-10 rounded-full flex justify-center items-center font-semibold hover:underline'>L</li>
                            <li className='bg-slate-200 h-10 w-10 rounded-full flex justify-center items-center font-semibold hover:underline'>XL</li>
                        </ul>

                        <button className='bg-gradient-to-r from-gray-800 to-gray-900 text-white p-3 mt-5 flex justify-center items-center gap-2 rounded-md shadow-md hover:bg-gray-700 transition duration-300'>
                            <span className="font-semibold">Add to Cart</span>
                            <FaShoppingCart className="text-xl" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Product;
