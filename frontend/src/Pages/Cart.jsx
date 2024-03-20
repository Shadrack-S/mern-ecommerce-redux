import React from 'react';
import CartCard from '../components/CartCard';
import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';



const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const totalItems = items.length;
    let subTotal = 0;
    let totalPrice = 0;
    let totalPercent = 0;
    let disAmount = 0; 
    
    items.forEach(item => {
        subTotal += item.price * item.quantity;
        totalPrice += item.maxprice * item.quantity;
        disAmount = totalPrice - subTotal;
        console.log(disAmount)
        
    });
    totalPercent += Math.floor((disAmount / totalPrice) * 100);
    let toBePaid = subTotal+100
    // Format currency
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    return (
        <div className="container mx-auto w-full pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <h1 className='text-xl font-bold mb-4 md:mb-0'>My Bag ({totalItems})</h1>
            <div className="justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-[60%]">
                    {items && items.map(item => (
                        <CartCard key={item.id} item={item} />
                    ))}
                </div>

                {items.length<=0 ? (<div className='w-[75%]'>
                    <h1 className='w-screen'>Your Cart is empty</h1>
                </div>
                    )
                :(<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-[40%]">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Total Price</p>
                        <p className="text-gray-700">{formatter.format(totalPrice)}</p>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Discount Price</p>
                        <p className="text-gray-700">{formatter.format(subTotal)}</p>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Discount %</p>
                        <p className="text-gray-700">{totalPercent.toFixed(2)}%</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700">{formatter.format(100)}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">{formatter.format(toBePaid)} INR</p>
                            <p className="text-sm text-gray-700">including all tax</p>
                        </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-gray-700 py-3 font-medium text-blue-50 hover:bg-gray-600">Check out</button>
                </div>)}
                
            </div>
        </div>
    );
};

export default Cart;
