import React, { useState } from 'react';
import Card from './Card';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})
import {Pagination} from "@nextui-org/react";
import { useLoaderData } from 'react-router-dom';



const Home = () => {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [sort, setSort] = useState('');
    const [itemPerPage, setItemPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);


    const totalProductsCount = useLoaderData()

    const handleReset = () => {
        setSearch('');
        setCategory('');
        setBrand('');
        setPrice('');
        setSort('');
    }


    const  {data: products = []} = useQuery({
        queryKey: ['products', search, category, brand, price, sort, itemPerPage, currentPage],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/products?search=${search}&category=${category}&price=${price}&brand=${brand}&sort=${sort}&page=${currentPage}&limit=${itemPerPage}`);
            console.log(data.length)
            return data;
        }
    })
    

    console.log(products)
    



    return (
        <>
                <h1 className='text-3xl font-bold text-center mt-10'>Products</h1>
        <section className='flex flex-col mt-10'>
            <div className='flex flex-wrap gap-2 mb-10 px-0 lg:px-16'>
                <div className='input-md w-[140px] lg:w-[200px]'>
                   <label className="input input-bordered flex items-center gap-2">
                       <input value={search} onChange={e => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
                   </label>
                </div>
                <div className='input-md w-[150px] lg:w-[200px]'>
                   <select value={category} onChange={e => {setCategory(e.target.value);
                    setCurrentPage(1)
                   }} className="select select-bordered w-full max-w-xs">
                     <option value={''} >Category</option>
                     <option>Mobile</option>
                     <option>Laptop</option>
                     <option>Tablet</option>
                     <option>Accessories</option>
                     <option>Camera</option>
                     <option>Wearable</option>
                     <option>Storage</option>
                     <option>Home Automation</option>
                     <option>Dron</option>
                     <option>Monitor</option>
                     <option>Projector</option>
                     <option>Networking</option>
                     <option>Power</option>
                   </select>
                </div>
                <div className='input-md w-[140px] lg:w-[200px]'>
                <select value={brand} onChange={e => {setBrand(e.target.value)
                    setCurrentPage(1)
                }} className="select select-bordered w-full max-w-xs">
                     <option value={''} >Brand</option>
                     <option>TechBrand</option>
                     <option>ComputeX</option>
                     <option>GigaGame</option>
                     <option>ShutterTech</option>
                     <option>AudioPro</option>
                     <option>VisionWare</option>
                     <option>Wearable</option>
                     <option>WearTech</option>
                     <option>DataFast</option>
                     <option>HomeSmart</option>
                     <option>ScreenMaster</option>
                     <option>NetMaster</option>
                     <option>LightSmart</option>
                     <option>SecureHome</option>
                     <option>SkyCapture</option>
                     <option>PowerMax</option>
                   </select>
                </div>
                <div className='input-md w-[160px] lg:w-[200px]'>
                <select value={price} onChange={e => {setPrice(e.target.value)
                    setCurrentPage(1)
                }} className="select select-bordered w-full max-w-xs">
                     <option value={''} >Price range</option>
                     <option value={'A'}>$0 - $100</option>
                     <option value={'B'}>$100 - $500</option>
                     <option value={'C'}>$500 - $1000</option>
                     <option value={'D'}>$1000 - $2000</option>
                   </select>
                </div>
                <div className='input-md w-[140px] lg:w-[200px]'>
                    <select value={sort} onChange={e => {setSort(e.target.value)
                        setCurrentPage(1)
                    }} className="select select-bordered w-full max-w-xs">
                       <option value={''}>Sort by:</option>
                       <option value="price-low-high">Price: Low to High</option>
                       <option value="price-high-low">Price: High to Low</option>
                       <option value="date-newest">Date Added: Newest First</option>
                   </select>
                </div>
                <div>
                    <button onClick={handleReset} className='btn bg-[#2B3440] text-white hover:text-black'>Reset</button>
                </div>
            </div>
            <div className='flex justify-center flex-wrap gap-6 w-full'>
            {
                products.map(product => (
                    <Card key={product._id} {...product} />
                ))
            }
            </div>
        </section>
        <section className={`flex justify-center items-center mt-16`}>
           <Pagination color={"primary"} isCompact showControls 
           total={Math.ceil(totalProductsCount/itemPerPage)} 
           initialPage={1}
           page={currentPage}
           onChange={( page ) => setCurrentPage(page)}
            />
        </section>
        </>
    );
};

export default Home;