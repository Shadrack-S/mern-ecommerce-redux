import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { redirect, useNavigate } from 'react-router-dom';


export async function loader() {
    try{
        const res =await axios.post(`${import.meta.env.VITE_API_URL}/auth/status`, {role:'Admin'} ,{withCredentials:true})
        console.log(res)
        return{res}
    }catch(error){
        return redirect('/login')
    }
}
const AddProduct = () => {
    const navigate= useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        axios.post (`${import.meta.env.VITE_API_URL}/products` ,data , {withCredentials:true})
        .then(res=>{
            navigate('/products')
        })
        .catch(error=>{
            console.log(error)
        })
    };

    return (
        <div className="container mx-auto mt-8 mb-8">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
                <label htmlFor="title" className="block mb-2">Title</label>
                <input type="text" {...register("title", { required: true })} className="border border-gray-300 px-3 py-2 mb-4 w-full" />

                <label htmlFor="price" className="block mb-2">Sale Price</label>
                <input type="number" {...register("price", { required: true })} className="border border-gray-300 px-3 py-2 mb-4 w-full" />

                <label htmlFor="maxprice" className="block mb-2">MRP</label>
                <input type="number" {...register("maxprice", { required: true })} className="border border-gray-300 px-3 py-2 mb-4 w-full" />

                <label htmlFor="description" className="block mb-2">Description</label>
                <textarea {...register("description", { required: true })} className="border border-gray-300 px-3 py-2 mb-4 w-full h-32 resize-none"></textarea>

                <label htmlFor="image1" className="block mb-2">Image 1</label>
                <input type="text" {...register("image1", { required: true })} className="border border-gray-300 px-3 py-2 mb-4 w-full" />

                <label htmlFor="image2" className="block mb-2">Image 2</label>
                <input type="text" {...register("image2", { required: true })} className="border border-gray-300 px-3 py-2 mb-4 w-full" />

                <label htmlFor="image3" className="block mb-2">Image 3</label>
                <input type="text" {...register("image3", { required: true })} className="border border-gray-300 px-3 py-2 mb-4 w-full" />    
              

                <label htmlFor=" thumbnail" className="block mb-2">Thumbnails</label>
                <input type="text" {...register("thumbnail", { required: true })} className="border border-gray-300 px-3 py-2 mb-4 w-full" />

                <button type="submit" className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;
