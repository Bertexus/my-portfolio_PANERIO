import React from 'react'
import ui_1 from '../assets/ui-1.png'
import ui_2 from '../assets/ui-2.png'
import ui_3 from '../assets/ui-3.png'
import ui_4 from '../assets/ui-4.png'
import ui_5 from '../assets/ui-5.png'
import ui_6 from '../assets/ui-6.png'
// import ui_7 from '../assets/ui-7.png'
import vetclinic_pic from '../assets/vetclinic-pic.png'
import lhps_pic from '../assets/lhps-pic.png'
import doctorapp_pic from '../assets/doctorapp-pic.png'
import hotel_pic from '../assets/hotel-pic.png'


const Project = () => {
  return (
    <div className='max-w-[1200px] md:h-[70] mx-auto py-10 bg-black' id='project'>
        
        <div className='flex justify-center py-10'>
            <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 inline-block
                            text-transparent bg-clip-text'>
                Projects
            </h2>   
        </div>

        <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 inline-block text-transparent bg-clip-text px-5'>UI/UX Designs</h2>
        
        <div className='grid grid-cols-3 place-items-center py-10 md:flex md:justify-between md:items-center'>
            <div className='flex flex-col items-center m-4 sm:my-0 ' width={300} height={300}>
                <img src={ui_1} alt="" className='rounded-lg'/>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 ' width={300} height={300}>
                <img src={ui_2} alt="" className='rounded-lg'/>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 ' width={300} height={300}>
                <img src={ui_3} alt="" className='rounded-lg'/>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 ' width={300} height={300}>
                <img src={ui_4} alt="" className='rounded-lg'/>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 ' width={300} height={300}>
                <img src={ui_5} alt="" className='rounded-lg'/>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 ' width={300} height={300}>
                <img src={ui_6} alt="" className='rounded-lg'/>
            </div>
        </div>

        <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 inline-block text-transparent bg-clip-text px-5 mt-8'>Web Development (Laravel)</h2>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-10'>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={vetclinic_pic} alt="" className="w-full h-full object-cover"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Vet Clinic System</span>                           
                </div>
            </div>
   
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={lhps_pic} alt="" className="w-full h-full object-cover"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Psychological Services System</span>                           
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={doctorapp_pic} alt="" className="w-full h-full object-cover"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Doctor Appointment System</span>                           
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={hotel_pic} alt="" className="w-full h-full object-cover"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Hotel Booking Reservation System</span>                           
                </div>
            </div>

        </div>

        
            


       
        
    </div>
  )
}

export default Project