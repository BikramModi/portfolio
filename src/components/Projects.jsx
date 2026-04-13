import React from 'react'


import AnimatedContent from '../reactbits/AnimatedContent';

import img1 from '../assets/googly.webp'
import img2 from '../assets/multy.webp'


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

// ..
AOS.init();


export default function Projects() {
    return (
        <div>


            <h1 style={{ display: 'none' }}>Bikram's MERN Stack Projects</h1><br />
            <p style={{ display: 'none' }}>
                Browse Bikram's MERN stack development portfolio including full-stack projects built with MongoDB, Express.js, React.js, and Node.js. Real-world applications showcasing modern web development.
            </p>


            <Helmet>
                <title>Projects | Bikram Portfolio</title>
                <meta
                    name="description"
                    content="Explore Bikram's full stack MERN projects."
                />
                <link rel="canonical" href="https://www.bikramportfolio.ooguy.com/projects" />


                <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.bikramportfolio.ooguy.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://www.bikramportfolio.ooguy.com/projects"
        }
      ]
    }
    `}
  </script>
            </Helmet>

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

                <div className="w-[100%] mx-auto sm:flex sm:justify-start space-x-3 sm:flex-wrap">


                    <h1 className="w-[100%] h-12 bg-slate-300 sm:text-3xl font-serif mt-3">
                        PROJECTS
                    </h1>



                    <div data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"

                        className="sm:w-[24%] shadow-md shadow-gray-600 mt-3 ml-3  ">


                        <div className="w-[100%] size-48 bg-slate-200">
                            <img className='w-[100%] size-48 object-cover' src={img1} alt="google" />
                        </div>



                        <div className="w-[100%] size-48 bg-slate-700">

                            <div className="w-[100%] size-12 ">
                                <div className="flex ml-2 sm:text-2xl font-bold text-white">UI Clone</div>
                            </div>

                            <div className="w-[100%] size-24">
                                <div className="flex ml-2 text-white">Using React</div>
                            </div>

                            <div className="w-[100%] size-12 flex">
                                <button className='bg-blue-500 h-8 p-1 cursor-pointer rounded-lg text-white duration-300 ml-2 mt-1
                        hover:bg-blue-700 '> <Link to='https://mygoogly.giize.com'><div className="text-white ">Live Demo</div></Link> </button>
                            </div>

                        </div>




                    </div>

                    <div data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"

                        className="sm:w-[24%] shadow-md shadow-gray-600 mt-3 ml-3 ">


                        <div className="w-[100%] size-48 bg-slate-200">
                            <img className='w-[100%] size-48 object-cover' src={img2} alt="multer" />
                        </div>



                        <div className="w-[100%] size-48 bg-slate-700">

                            <div className="w-[100%] size-12 ">
                                <div className="flex ml-2 sm:text-2xl font-bold text-white">Basic Form</div>
                            </div>

                            <div className="w-[100%] size-24">
                                <div className="flex ml-2 text-white">Using MERN</div>
                            </div>

                            <div className="w-[100%] size-12 flex">
                                <button className='bg-blue-500 h-8 p-1 cursor-pointer rounded-lg text-white duration-300 ml-2 mt-1
    hover:bg-blue-700 '>  <Link to='https://multer-sandy.vercel.app/'><div className="text-white">Live Demo</div></Link> </button>
                            </div>

                        </div>




                    </div>

                    <div data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"

                        className="sm:w-[24%] shadow-md shadow-gray-600 mt-3 ml-3">


                        <div className="w-[100%] size-48 bg-slate-200">
                            image
                        </div>



                        <div className="w-[100%] size-48 bg-slate-700">

                            <div className="w-[100%] size-12 ">
                                <div className="flex ml-2 sm:text-2xl font-bold text-white">Title</div>
                            </div>

                            <div className="w-[100%] size-24">
                                <div className="flex ml-2 text-white">Description</div>
                            </div>

                            <div className="w-[100%] size-12 flex">
                                <button className='bg-blue-500 h-8 p-1 cursor-pointer rounded-lg text-white duration-300 ml-2 mt-1
                        hover:bg-blue-700 '>Live Demo</button>
                            </div>

                        </div>




                    </div>

                    <div data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"

                        className="sm:w-[24%] shadow-md shadow-gray-600 mt-3 ml-3">


                        <div className="w-[100%] size-48 bg-slate-200">
                            image
                        </div>



                        <div className="w-[100%] size-48 bg-slate-700">

                            <div className="w-[100%] size-12 ">
                                <div className="flex ml-2 sm:text-2xl font-bold text-white">Title</div>
                            </div>

                            <div className="w-[100%] size-24">
                                <div className="flex ml-2 text-white">Description</div>
                            </div>

                            <div className="w-[100%] size-12 flex">
                                <button className='bg-blue-500 h-8 p-1 cursor-pointer rounded-lg text-white duration-300 ml-2 mt-1
                        hover:bg-blue-700 '>Live Demo</button>
                            </div>

                        </div>




                    </div>

                    <div className="sm:w-[24%] shadow-md shadow-gray-600 mt-3 ml-3">


                        <div className="w-[100%] size-48 bg-slate-200">
                            image
                        </div>



                        <div className="w-[100%] size-48 bg-slate-700">

                            <div className="w-[100%] size-12 ">
                                <div className="flex ml-2 sm:text-2xl font-bold text-white">Title</div>
                            </div>

                            <div className="w-[100%] size-24">
                                <div className="flex ml-2 text-white">Description</div>
                            </div>

                            <div className="w-[100%] size-12 flex">
                                <button className='bg-blue-500 h-8 p-1 cursor-pointer rounded-lg text-white duration-300 ml-2 mt-1
                        hover:bg-blue-700 '>Live Demo</button>
                            </div>

                        </div>




                    </div>

                    <div className="sm:w-[24%] shadow-md shadow-gray-600 mt-3 ml-3">


                        <div className="w-[100%] size-48 bg-slate-200">
                            image
                        </div>



                        <div className="w-[100%] size-48 bg-slate-700">

                            <div className="w-[100%] size-12 ">
                                <div className="flex ml-2 sm:text-2xl font-bold text-white">Title</div>
                            </div>

                            <div className="w-[100%] size-24">
                                <div className="flex ml-2 text-white">Description</div>
                            </div>

                            <div className="w-[100%] size-12 flex">
                                <button className='bg-blue-500 h-8 p-1 cursor-pointer rounded-lg text-white duration-300 ml-2 mt-1
                        hover:bg-blue-700 '>Live Demo</button>
                            </div>

                        </div>




                    </div>


                </div>


            </AnimatedContent>



        </div>


    )
}
