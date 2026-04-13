import React, { useState, useEffect } from 'react'

import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { GrDocumentUser } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";



import AnimatedContent from '../reactbits/AnimatedContent';
import SplitText from '../reactbits/SplitText/SplitText';

import Example from '../reactboots/Example';
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton';

import img3 from '../assets/profile.jpg'

import { Helmet } from "react-helmet";



export default function Home() {




    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };


    const [spin, setSpin] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpin(false)
        }, 4000);

        console.log('useeffect....');

    }, [])


    return (
        <div>



<Helmet>
  <title>My Portfolio | Bikram Portfolio</title>
  <meta
    name="description"
    content="Explore Bikram's professional resume, skills, and experience."
  />
  <link rel="canonical" href="https://www.bikramportfolio.ooguy.com/" />


</Helmet>



            {
                spin ?
                    <Skeleton /> :
                    <>

                        <AnimatedContent
                            distance={150}
                            direction="horizontal"
                            reverse={false}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                        >
                            <div>


                                <div className="  sm:h-screen bg-emerald-200 ">

                                    <div className=" w-[100%] sm:w-[95%] sm:mx-auto   ">

                                        <div className=" sm:flex sm:justify-start sm:space-x-9 ">


                                            <div data-aos="zoom-in"
                                                data-aos-offset="200"
                                                data-aos-delay="50"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-out"
                                                data-aos-mirror="true"
                                                data-aos-once="false"
                                                data-aos-anchor-placement="top-center"

                                                className=" w-[100%] sm:w-[35%] h-[600px]  bg-white rounded-3xl shadow-slate-300 my-16 space-y-14 duration-500
                                      hover:bg-slate-300 hover:rounded-none ">

                                                <div data-aos="slide-down"
                                                    data-aos-offset="200"
                                                    data-aos-delay="50"
                                                    data-aos-duration="1000"
                                                    data-aos-easing="ease-in-out"
                                                    data-aos-mirror="true"
                                                    data-aos-once="false"
                                                    data-aos-anchor-placement="top-center"

                                                    className=" size-[200px] bg-red-300 mx-auto -mt-6 rounded-full border-orange-500 border-4  ">
                                                    <img className='size-[200px] rounded-full border-orange-500 border-4 object-cover' src={img3} alt="profile" />
                                                </div>

                                                <div className="h-[30%] w-[80%] mx-auto">
                                                    <h1 className="w-full h-[33%] sm:text-4xl text-slate-600 font-bold">
                                                        MY PORTFOLIO
                                                    </h1>
                                                    <h2 className="w-full h-[33%] sm:text-3xl font-bold">
                                                        I am a Full Stack
                                                    </h2>
                                                    <h2 className="w-full h-[33%] sm:text-3xl font-bold">
                                                        Developer
                                                    </h2>
                                                </div>
                                                <div className="h-[10%] w-[80%]  mx-auto flex justify-between">
                                                    <FaFacebook className='sm:text-3xl cursor-pointer hover:bg-slate-400 duration-300' />
                                                    <FaXTwitter className='sm:text-3xl cursor-pointer hover:bg-slate-400 duration-300' />
                                                    <FaDiscord className='sm:text-3xl cursor-pointer hover:bg-slate-400 duration-300' />
                                                    <FaGithub className='sm:text-3xl cursor-pointer hover:bg-slate-400 duration-300' />
                                                </div>

                                            </div>



                                            <div className=" w-[100%] sm:w-[65%] space-y-9 my-16">


                                                <div data-aos="zoom-in"
                                                    data-aos-offset="200"
                                                    data-aos-delay="50"
                                                    data-aos-duration="1000"
                                                    data-aos-easing="ease-in-out"
                                                    data-aos-mirror="true"
                                                    data-aos-once="false"
                                                    data-aos-anchor-placement="top-center"

                                                    className=" h-[410px] bg-white rounded-3xl shadow-slate-300 space-y-3
                                        hover:bg-slate-300 hover:rounded-none">
                                                    <div className="w-[100%] h-[11%]  font-bold size-10 "><SplitText
                                                        text="Hello, There!"
                                                        className="text-2xl font-semibold text-center"
                                                        delay={150}
                                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                        easing="easeOutCubic"
                                                        threshold={0.2}
                                                        rootMargin="-50px"
                                                        onLetterAnimationComplete={handleAnimationComplete}
                                                    /></div>
                                                    <div className="w-[100%] h-[11%]  font-bold sm:text-5xl "><span className=' text-slate-600 '>I'M</span> TOPHER <span className=' text-slate-600 '>ATTICUS</span> ,   </div>
                                                    <div className="w-[100%] h-[11%]  font-bold sm:text-5xl"><span className=' text-slate-600 '>A MERN STACK</span> DEVELOPER</div>
                                                    <div className="w-[100%] h-[11%]  font-bold sm:text-5xl">WITH USER CENTRIC <span className=' text-slate-600 '>DEVELOPER</span> </div>
                                                    <div className="w-[100%] h-[11%]  font-bold sm:text-5xl"> <span className=' text-slate-600 '>WITH PIXEL-PERFECT</span> PRECISION</div>
                                                    <div className="w-[100%] h-[22%]  sm:font-bold flex justify-center space-x-2 sm:space-x-9 ">
                                                        <Link to='/resume' > <button className='sm:w-28 p-1 bg-[#0d6efd] rounded-3xl mt-11 flex justify-center items-center text-black  hover:text-white hover:bg-[#0b5ed7] animate-bounce '>Resume <span className='p-2'><GrDocumentUser /></span> </button></Link>

                                                        <Link to='/projects'> <button className='sm:w-28 p-1 bg-[#0d6efd] rounded-3xl mt-11 flex justify-center items-center text-black hover:text-white hover:bg-[#0b5ed7] animate-bounce  '>Projects <span className='p-2'><GoProjectSymlink /></span></button></Link>





                                                        <button className='sm:w-28 p-1 bg-[#0d6efd] rounded-3xl mt-11 flex justify-center items-center hover:text-white hover:bg-[#0b5ed7] animate-bounce  '> {<Example />} </button>

                                                    </div>
                                                    <div className="border-b-2 border-green-400 "></div>

                                                </div>



                                                <div

                                                    className="h-[150px] bg-white rounded-3xl shadow-slate-300 sm:flex sm:justify-between sm:items-center
                                        hover:bg-slate-200 hover:rounded-none">

                                                    <div className=" sm:w-[25%] h-[150px] ">

                                                        <div className="mt-[1px] text-5xl font-bold">232</div>
                                                        <div className="mt-[30px] border-b-4 border-blue-800 w-[10%] ml-[45%]"></div>
                                                        <div className="mt-[25px] text-1xl">Clients</div>

                                                    </div>
                                                    <div className="sm:w-[25%] h-[150px]">
                                                        <div className="mt-[1px] text-5xl font-bold">521</div>
                                                        <div className="mt-[30px] border-b-4 border-blue-800 w-[10%] ml-[45%]"></div>
                                                        <div className="mt-[25px] text-1xl">Projects</div>
                                                    </div>
                                                    <div className="sm:w-[25%] h-[150px]">
                                                        <div className="mt-[1px] text-5xl font-bold">1453</div>
                                                        <div className="mt-[30px] border-b-4 border-blue-800 w-[10%] ml-[45%]"></div>
                                                        <div className="mt-[25px] text-1xl">Hours Of Support</div>
                                                    </div>
                                                    <div className=" sm:w-[25%] h-[150px]">
                                                        <div className="mt-[1px] text-5xl font-bold">32</div>
                                                        <div className="mt-[30px] border-b-4 border-blue-800 w-[10%] ml-[45%]"></div>
                                                        <div className="mt-[25px] text-1xl">Workers</div>
                                                    </div>

                                                </div>



                                            </div>
                                        </div>


                                    </div>







                                </div>

                            </div>
                        </AnimatedContent>

                    </>
            }
















        </div>
    )
}
