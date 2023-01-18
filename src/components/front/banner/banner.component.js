import React from 'react'

export function Banner(){

    return(
        <>
            <div className="mx-w-[1240px] mx-auto p-4">
                <div className="max-h-[500px] relative">
                    {/* overlay */}
                    <div className="absolute w-full h-full max-h-[500px] text-gray-200 bg-black/40 flex flex-col justify-center pl-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold">The<span className="text-orange-600"> Best</span></h1>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-orange-600">Food<span  className="text-white"> Delivered</span></h1>
                    </div>
                    <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
                </div>
            </div>
        </>
    )
}