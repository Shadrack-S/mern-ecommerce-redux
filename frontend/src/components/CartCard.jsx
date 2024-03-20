import React, { useState } from 'react';

const CartCard = ({ item }) => {
    const [value, setValue] = useState(1); // Default value set to 1

    const handleDecrease = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    };

    const handleIncrease = () => {
        setValue(value + 1);
    };

    const handleRemove = () => {
        // Implement your remove item logic here
    };

    return (
        <div className="mb-6 rounded-lg bg-white p-6 shadow-md flex items-center">
            <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-contain mr-4" />
            <div className="flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                <p className="mt-1 text-xs text-gray-700">{item._id}</p>
                <div className="flex items-center mt-4 justify-between">
                    <div className="flex items-center space-x-2">
                        <button
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-gray-600 hover:text-white"
                            onClick={handleDecrease}
                        >
                            -
                        </button>
                        <input
                            className="h-8 w-12 border bg-white text-center text-sm outline-none"
                            type="number"
                            value={item.quantity}
                            min="1"
                            readOnly
                        />
                        <button
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-gray-600 hover:text-white"
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-sm">{item.price * value}.00&#8377;</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            onClick={handleRemove}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
