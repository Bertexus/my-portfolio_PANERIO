import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
        
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 inline-block text-transparent bg-clip-text'>About me</h2>
                    <p className='text-base lg:text-lg'>  
                        I am an IT student at the University of Mindanao, focusing on web development and design.
                        I am eager to learn more about web development to improve my skills in solving real-world problems.
                        I have gained most of my programming knowledge through Udemy courses and school projects.
                        I am also a strong team player who works well with others to create and implement solutions.
                    </p>
                </div>
                
            </div>

            <img src={about} className='mx-auto rounded-3xl py-8 md:py-0' width={300} height={300}/>
        
        </div>
    </div>
  )
}

export default About