import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import mysql from '../assets/mysql.png'
import tailwind from '../assets/tailwind.png'
import laravel from '../assets/laravel.png'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-4
                place-items-center md:flex md:justify-between md:items-center rounded-lg'>
        
        <h2 className='text-gray-500 text-2xl md:text-4xl font-bold m-4'>
            My <br/> Tech <br/> Stack

        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={html} alt=""/>
            <p className='mt-2'>HTML5</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={css} alt=""/>
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={javascript} alt=""/>
            <p className='mt-2'>JAVASCRIPT</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={mysql} alt=""/>
            <p className='mt-2'>MYSQL</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt=""/>
            <p className='mt-2'>TAILWIND CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={laravel} alt=""/>
            <p className='mt-2'>LARAVEL</p>
        </div>


    </div>
  )
}

export default Skills