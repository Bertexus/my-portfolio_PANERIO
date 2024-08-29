import React from 'react'
import heroimage from '../assets/me.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70] mx-auto py-8 bg-black' id='home'>
        
        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lgLw-[400px]'>
            
            <img src={heroimage} alt="hero image"/>
    
        </div>
        

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='bg-gradient-to-r from-orange-500 to-pink-500 inline-block text-transparent bg-clip-text'>
                    I'm a
                </span><br/>
                <TypeAnimation
                    sequence={[
                        "Webdeveloper",
                        1500,
                        "Webdesigner",
                        1500,
                        "UX designer",
                        1500
                        
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Eriberto Panerio Jr. and I specialize in web development and design.
            </p>

            <div className='my-8'>
                <a href="https://drive.google.com/file/d/1HkxEiRlrmVDfJPMVK8jblV3OUaQkBFYk/view?usp=sharing" target='_blank' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                    View Full Resume
                </a>

                <a href="https://drive.usercontent.google.com/uc?id=1HkxEiRlrmVDfJPMVK8jblV3OUaQkBFYk&export=download" download="Eriberto_Panerio_Jr._Resume.pdf" className='px-6 py-3 w-full rounded-xl mr-4 border
                     border-gray-400 hover:bg-gradient-to-br
                    from-orange-500 to-pink-500 text-white hover:border-none'>
                    Download Resume
                </a>

            </div>
        </div>


    </div>

    

  )
}

export default Hero