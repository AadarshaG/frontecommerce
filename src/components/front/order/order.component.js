import React from 'react'

export function OrderNow(){

    return(
        <>
            <div className="max-w-[1640px] p-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* cards */}
                    <div className="relative rounded-xl">
                        {/* overlay */}
                        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
                            <p className="font-bold text-2xl pt-4 px-2">Sun's Out</p>
                            <p className="px-2">Through 12/22</p>
                            <button className="absolute border border-white rounded-xl mx-2 bottom-4 bg-white text-black w-[100px]">Order Now</button>
                        </div>
                        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
                    </div>
                    {/* cards */}
                    <div className="relative rounded-xl">
                        {/* overlay */}
                        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
                            <p className="font-bold text-2xl pt-4 px-2">New One</p>
                            <p className="px-2">Through 23/22</p>
                            <button className="absolute border border-white rounded-xl mx-2 bottom-4 bg-white text-black w-[100px]">Order Now</button>
                        </div>
                        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
                    </div>
                    {/* cards */}
                    <div className="relative rounded-xl">
                        {/* overlay */}
                        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
                            <p className="font-bold text-2xl pt-4 px-2">Today's Special</p>
                            <p className="px-2">Through 24/22</p>
                            <button className="absolute border border-white rounded-xl mx-2 bottom-4 bg-white text-black w-[100px]">Order Now</button>
                        </div>
                        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
                    </div>
                </div>
            </div>
        </>
    )
}