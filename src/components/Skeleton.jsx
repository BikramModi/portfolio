import React from 'react'

export default function Skeleton() {
    return (
        <div>

            <div className=" sm:h-screen bg-emerald-200 animate-pulse ">

                <div className="sm:w-[95%] mx-auto   ">

                    <div className="sm:flex sm:justify-start sm:space-x-9 ">
                        <div className=" w-[100%] sm:w-[35%] h-[600px]  bg-white rounded-3xl shadow-slate-300 my-16 space-y-14 ">

                            <div className=" size-[200px] bg-gray-300 mx-auto -mt-6 rounded-full border-orange-500 border-4 animate-pulse  ">
                            
                            </div>
                            <div className="h-[30%] w-[80%] bg-gray-300 mx-auto animate-pulse ">

                            </div>
                            <div className="h-[10%] w-[80%] bg-gray-300 mx-auto animate-pulse ">

                            </div>

                        </div>


                        <div className=" w-[100%] sm:w-[65%] space-y-9 my-16">
                            <div className=" h-[410px] bg-white rounded-3xl shadow-slate-300 space-y-3 ">
                                
                            </div>
                            <div className="h-[150px] bg-white rounded-3xl shadow-slate-300"></div>
                        </div>
                    </div>


                </div>


            </div>


        </div>
    )
}
