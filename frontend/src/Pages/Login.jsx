import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {


  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, data, {withCredentials:true})
      .then(res => {
        navigate('/products')
        console.log(res)
      })
      .catch((error) => {
        console.log(error.lenth)
      })
  }
  return (
    <div className="flex w-screen flex-wrap text-slate-800 sm:mb-5 md:mb-0">
      <div className="relative hidden h-screen select-none flex-col justify-center bg-gray-800 text-center md:flex md:w-1/2">
        <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full font-semibold bg-white px-3 py-1  text-gray-600">India's No.1 Fashion Exclusive Store.</span>
          <p className="my-6 text-3xl font-semibold leading-10">Shopzey</p>
          <p className="mb-4">Experience the exclusive fashion offerings at India's No.1 Fashion Exclusive Store.</p>
          <Link to='#' className='font-semibold text-2xl tracking-wide text-white underline underline-offset-4'>Welcome Back</Link>
        </div>
      </div>
      <div className="flex w-full font-semibold flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link to="#" className='text-2xl font-bold text-gray-600'>Shopzey</Link>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Login your account !</p>
          <p className="mt-6 text-center font-medium md:text-left">
            Don’t have an account yet ?
            <Link to='/signup' className='whitespace-nowrap font-semibold text-gray-700 hover:underline ml-1'>Create an account</Link>
          </p>

          <form
            className="flex flex-col items-stretch gap-2 pt-3 md:pt-8"
            onSubmit={handleSubmit(onSubmit)}
          >


            <label htmlFor="email">Email</label>
            <input
              className={`border p-2 border-slate-300 w-full font-semibold outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              type="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && errors.email.type === 'required' && (
              <span className="text-red-500">Email is required</span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <span className="text-red-500">Invalid email format</span>
            )}

            <label htmlFor="password">Password</label>
            <input
              className={`border p-2 border-slate-300 w-full font-semibold outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              type="password"
              {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password && errors.password.type === 'minLength' && (
              <span className="text-red-500">Password must be at least 8 characters</span>
            )}

            <input
              className="border p-2 border-slate-300 w-full font-semibold text-white bg-gray-700 hover:bg-slate-800 mt-2 rounded-xl"
              type="submit"
            />
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login