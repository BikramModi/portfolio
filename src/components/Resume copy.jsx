import React from 'react'

import { MdOutlineWork } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

import { FaAsterisk } from "react-icons/fa";

import { GrLanguage } from "react-icons/gr";

import { FaSuitcase } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
import { LuCalendarDays } from "react-icons/lu";

export default function Resume() {
    return (
        <div>

            <div className=" w-[97%] mx-auto ml-7  ">

                <div className=" flex justify-start items-center space-x-4 ">


                    <div className=" w-[35%] h-[1500px] bg-slate-300  shadow-black  ">


                        <div className=" w-[100%] h-[400px] bg-slate-400  ">
                            <div className="c">profile</div>

                            <div className="text-3xl absolute mt-[330px] ml-4">Topher Atticus</div>

                        </div>
                        <div className="w-[100%] h-[300px] border-b-2 border-black mt-2 ">
                            <div className="w-[100%] h-[70px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><MdOutlineWork />  <span className='text-lg'>Designer</span></div>
                            <div className="w-[100%] h-[75px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><ImHome />  <span className='text-lg'>London, UK</span></div>
                            <div className="w-[100%] h-[75px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><IoMail />  <span className='text-lg'>ex@mail.com</span></div>
                            <div className="w-[100%] h-[75px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><IoCall />  <span className='text-lg'>1224435534</span></div>
                            <div className=" w-[95%] flex justify-start ml-4 border-b-2 border-green-600 "></div>


                        </div>
                        <div className="w-[100%] h-[400px] border-b-2 border-black">

                            <div className="w-[100%] h-[92px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><FaAsterisk /><span className='text-xl text-black'>Skills</span></div>

                            <div className="w-[100%] h-[38px] flex justify-start text-green-800 text-lg ml-4">MongoDb</div>
                            <div className="w-[100%] h-[38px]">
                                <div className="w-[93%] h-[20px] flex justify-start items-center bg-gray-500 ml-4 rounded-full">
                                    <div className="w-[90%] h-[20px] flex justify-start items-center bg-green-500 rounded-full"><span className=' w-[100%] text-white '>90%</span></div>
                                </div>
                            </div>

                            <div className="w-[100%] h-[38px] flex justify-start text-green-800 text-lg ml-4">Express</div>
                            <div className="w-[100%] h-[38px]">
                                <div className="w-[93%] h-[20px] flex justify-start items-center bg-gray-500 ml-4 rounded-full">
                                    <div className="w-[80%] h-[20px] flex justify-start items-center bg-green-500 rounded-full"><span className=' w-[100%] text-white '>80%</span></div>
                                </div>
                            </div>

                            <div className="w-[100%] h-[38px] flex justify-start text-green-800 text-lg ml-4">React</div>
                            <div className="w-[100%] h-[38px]">
                                <div className="w-[93%] h-[20px] flex justify-start items-center bg-gray-500 ml-4 rounded-full">
                                    <div className="w-[75%] h-[20px] flex justify-start items-center bg-green-500 rounded-full"><span className=' w-[100%] text-white '>75%</span></div>
                                </div>
                            </div>

                            <div className="w-[100%] h-[38px] flex justify-start text-green-800 text-lg ml-4">Node</div>
                            <div className="w-[100%] h-[38px]">
                                <div className="w-[93%] h-[20px] flex justify-start items-center bg-gray-500 ml-4 rounded-full">
                                    <div className="w-[50%] h-[20px] flex justify-start items-center bg-green-500 rounded-full"><span className=' w-[100%] text-white '>50%</span></div>
                                </div>
                            </div>
                            <div className=" w-[95%] flex justify-start ml-4 border-b-2 border-green-600 "></div>


                        </div>
                        <div className="w-[100%] h-[400px] bg-slate-400">

                            <div className="w-[100%] h-[130px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><GrLanguage /><span className='text-xl text-black'>Languages</span></div>

                            <div className="w-[100%] h-[44px] flex justify-start text-green-800 text-lg ml-4">English</div>
                            <div className="w-[100%] h-[44px]">
                                <div className="w-[93%] h-[20px] flex justify-start items-center bg-gray-500 ml-4 rounded-full">
                                    <div className="w-[90%] h-[20px] flex justify-start items-center bg-green-500 rounded-full"><span className=' w-[100%] text-white '>90%</span></div>
                                </div>
                            </div>

                            <div className="w-[100%] h-[44px] flex justify-start text-green-800 text-lg ml-4">Spanish</div>
                            <div className="w-[100%] h-[44px]">
                                <div className="w-[93%] h-[20px] flex justify-start items-center bg-gray-500 ml-4 rounded-full">
                                    <div className="w-[80%] h-[20px] flex justify-start items-center bg-green-500 rounded-full"><span className=' w-[100%] text-white '>80%</span></div>
                                </div>
                            </div>

                            <div className="w-[100%] h-[44px] flex justify-start text-green-800 text-lg ml-4">German</div>
                            <div className="w-[100%] h-[44px]">
                                <div className="w-[93%] h-[20px] flex justify-start items-center bg-gray-500 ml-4 rounded-full">
                                    <div className="w-[75%] h-[20px] flex justify-start items-center bg-green-500 rounded-full"><span className=' w-[100%] text-white '>75%</span></div>
                                </div>
                            </div>



                        </div>
                    </div>




                    <div className=" w-[65%] space-y-4 ">

                        <div className=" w-[100%] h-[900px] bg-slate-500  shadow-black  ">
                            <div className="w-[100%] h-[150px]  border-b-2 border-black">
                                <div className="w-[100%] h-[130px] flex justify-start items-center text-green-800 text-3xl ml-4 space-x-5"><FaSuitcase /><span className='text-3xl text-black'>Work Experience</span></div>
                            </div>


                            <div className="w-[100%] h-[250px]  border-b-2 border-black">
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-2xl text-black font-semibold'>Front End Developer / w3schools.com</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><LuCalendarDays /><span className='text-xl text-green-800'>Jan 2015 - Current</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-xl text-black'>Lorem ipsum dolor sit amet. </span></div>
                                <div className=" w-[95%] flex justify-start ml-4 border-b-2 border-green-600 "></div>

                            </div>


                            <div className="w-[100%] h-[250px]  border-b-2 border-black">
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-2xl text-black font-semibold'>Web Developer / something.com</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><LuCalendarDays /><span className='text-xl text-green-800'>Mar 2012 - Dec 2014</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-xl text-black'>Consectetur adipisicing elit. Praesentium magnam consectetur vel</span></div>
                                <div className=" w-[95%] flex justify-start ml-4 border-b-2 border-green-600 "></div>
                            </div>


                            <div className="w-[100%] h-[250px]  border-b-2 border-black">
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-2xl text-black font-semibold'>Graphic Designer / designsomething.com</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><LuCalendarDays /><span className='text-xl text-green-800'>Jun 2010 - Mar 2012</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-xl text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span></div>
                                
                            </div>
                        </div>



                        <div className=" w-[100%] h-[585px] bg-slate-500  shadow-black  ">

                            <div className="w-[100%] h-[135px] border-b-2 border-black">
                                <div className="w-[100%] h-[130px] flex justify-start items-center text-green-800 text-4xl ml-4 space-x-5"><TiStarburst /><span className='text-4xl text-black'>Education</span></div>

                            </div>

                            <div className="w-[100%] h-[150px] border-b-2 border-black">
                                <div className="w-[100%] h-[40px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-2xl text-black font-semibold'>W3Schools.com</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><LuCalendarDays /><span className='text-xl text-green-800'>Forever</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-xl text-black'>Web Development! All I need to know in one place</span></div>
                                <div className=" w-[95%] flex justify-start ml-4 border-b-2 border-green-600 "></div>
                            </div>

                            <div className="w-[100%] h-[150px] border-b-2 border-black">
                                <div className="w-[100%] h-[40px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-2xl text-black font-semibold'>London Business School</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><LuCalendarDays /><span className='text-xl text-green-800'>2013 - 2015</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-xl text-black'>Master Degree</span></div>
                                <div className=" w-[95%] flex justify-start ml-4 border-b-2 border-green-600 "></div>
                            </div>

                            <div className="w-[100%] h-[150px] border-b-2 border-black">
                                <div className="w-[100%] h-[40px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-2xl text-black font-semibold'>School of Coding</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><LuCalendarDays /><span className='text-xl text-green-800'>2010 - 2013</span></div>
                                <div className="w-[100%] h-[50px] flex justify-start items-center text-green-800 text-2xl ml-4 space-x-5"><span className='text-xl text-black'>Bachelor Degree</span></div>
                                <div className=" w-[95%] flex justify-start ml-4 border-b-2 border-green-600 "></div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}
