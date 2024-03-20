import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const sellingprice = product.price;
  const mrp = product.maxprice;
  const deducted = mrp - sellingprice;
  const percent = Math.floor((deducted / mrp) * 100);

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
    
  };

  return (
    <div className="group my-4 md:my-9 flex flex-col overflow-hidden border border-gray-100 bg-white shadow-md rounded-xl">
      <Link to={`/products/${product._id}`} className="block overflow-hidden">
        <img
          className="w-full h-auto max-h-60 md:max-h-96 object-contain p-2 md:p-3 transition duration-500 group-hover:scale-110"
          src={product.thumbnail} // Assuming product.thumbnail is the actual URL
          alt={product.title}
        />
      </Link>
      <div className="flex flex-col justify-between flex-1 p-4 md:p-5">
        <Link to={`/products/${product.id}`}>
          <h5 className="text-lg md:text-xl tracking-tight text-slate-900 line-clamp-2" style={{ minHeight: '3rem' }}>
            {product.title}
          </h5>
        </Link>
        <div className="flex items-center justify-between mt-2 mb-4">
          <p className="flex flex-col gap-1 md:gap-2 items-baseline">
            <span className="text-xl md:text-xl font-bold text-slate-600">&#8377;{product.price} <span className='text-red-500 text-sm'>{percent}% off</span></span>
            <span className="text-sm text-slate-900 line-through ml-1 md:ml-2">&#8377;{product.maxprice}</span>
          </p>
          <div className='flex flex-row items-center gap-1 text-[#FFD700]'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-auto flex items-center justify-center bg-gray-900 px-3 py-2 text-sm text-white transition hover:bg-gray-700 rounded"
        >
          <FaShoppingCart className="mr-2 h-5 w-5" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
