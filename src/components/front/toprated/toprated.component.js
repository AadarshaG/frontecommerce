import React, { useState } from 'react'
import {data} from '../../../data/data'

export function TopRated(){

    const [foods, setFoods] = useState(data)

    // filter by category or types
    const FilterCategory = (category) =>{
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        )
    }
    // filter by price
    const FilterPrice = (price) =>{
        setFoods(
            data.filter((item)=>{
                return item.price === price;
            })
        )
    }

    return(
        <>
            <div className="max-w-[1240px] mx-auto p-4">
                <h1 className="text-4xl text-center font-bold text-orange-600">Top Rated Menu Items</h1>
                {/* filter rows */}
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* filter type */}
                    <div>
                        <p className="font-bold">Filter Type</p>
                        <div className="flex justify-between flex-wrap">
                            <button onClick={() => setFoods(data)} className="m-1 border border-black rounded-xl py-1 px-5 text-orange-600 hover:bg-orange-800 hover:text-white">All</button>
                            <button onClick={() => FilterCategory('burger')} className="m-1 border border-black rounded-xl py-1 px-5 text-orange-600 hover:bg-orange-800 hover:text-white">Burger</button>
                            <button onClick={() => FilterCategory('pizza')} className="m-1 border border-black rounded-xl py-1 px-5 text-orange-600 hover:bg-orange-800 hover:text-white">Pizza</button>
                            <button onClick={() => FilterCategory('salads')} className="m-1 border border-black rounded-xl py-1 px-5 text-orange-600 hover:bg-orange-800 hover:text-white">Salads</button>
                            <button onClick={() => FilterCategory('chickens')} className="m-1 border border-black rounded-xl py-1 px-5 text-orange-600 hover:bg-orange-800 hover:text-white">Chickens</button>
                        </div>
                    </div>
                    {/* filter price */}
                    <div>
                        <p className="font-bold">Filter Price</p>
                        <div className="flex justify-between flex-wrap">
                            <button onClick={() => FilterPrice('$')} className="m-1 border border-black rounded-xl py-1 px-5 text-orange-600 hover:bg-orange-800 hover:text-white">$</button>
                            <button onClick={() => FilterPrice('$$')} className="m-1 border border-black rounded-xl py-1 px-5 text-orange-600 hover:bg-orange-800 hover:text-white">$$</button>
                            <button onClick={() => FilterPrice('$$$')} className="m-1 border border-black rounded-xl py-1 px-5 text-orange-600 hover:bg-orange-800 hover:text-white">$$$</button>
                            <button onClick={() => FilterPrice('$$$$')} className="m-1 border border-black rounded-xl py-1 px-5 text-orange-600 hover:bg-orange-800 hover:text-white">$$$$</button>
                        </div>
                    </div>
                </div>
                {/* display items */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                    {
                        foods.map((food,index) =>(
                            <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                                <img src={food.image} alt={food.name} className="w-full h-[200px] object-cover rounded-t-lg"></img>
                                <div className="flex justify-between px-3 py-3">
                                    <p className="font-bold">{food.name}</p>
                                    <p>
                                        <span className="bg-orange-500 text-white p-1 rounded-full ">{food.price}</span>
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}