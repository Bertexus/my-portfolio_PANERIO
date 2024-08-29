import React from 'react'
import tesda from '../assets/tesda-logo.png'
import networking from '../assets/networking-certiport.png'
import database from '../assets/database-certiport.png'

const Certificates = () => {
  return (
    <div className='max-w-[1200px] md:h-[70] mx-auto py-8 bg-black border border-gray-600 rounded-lg' id='certifications'>

        <div className='flex justify-center'>
            <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 inline-block
                            text-transparent bg-clip-text'>
                Certifications
            </h2>   
        </div>
        

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <img src={database} className='mx-auto rounded-3xl py-8 md:py-0' width={300} height={300}/>

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-normal mb-4 text-white'>Certiport</h2>
                    <h2 className='text-4xl font-bold mb-4 text-white'>IT Specialist - Databases</h2>
                    <p className='text-base lg:text-lg text-white'>  
                        I hold a certification as an IT Specialist in Databases from Certiport, showcasing my foundational skills
                        in designing and querying relational databases like MySQL. This certification emphasizes my proficiency
                        in database management and SQL, ensuring effective and secure data management.
                    </p>
                </div>           
            </div>  

        </div>

        <div className='md:grid md:grid-cols-2 sm:py-16 flex flex-col-reverse md:flex-row'>
  
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                <h2 className='text-4xl font-normal mb-4 text-white'>Certiport</h2>
                <h2 className='text-4xl font-bold mb-4 text-white'>IT Specialist - Networking</h2>
                <p className='text-base lg:text-lg text-white'>
                    I hold a certification as an IT Specialist in Networking from Certiport, showcasing my foundational skills
                    in designing and querying relational databases like MySQL. This certification emphasizes my proficiency
                    in database management and SQL, ensuring effective and secure data management.
                </p>
                </div>
            </div>

            <img src={networking} className='mx-auto rounded-3xl py-8 md:py-0' width={300} height={300}/>
            
        </div>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <img src={tesda} className='mx-auto rounded-3xl py-8 md:py-0' width={300} height={300}/>

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-normal mb-4 text-white'>TESDA</h2>
                    <h2 className='text-4xl font-bold mb-4 text-white'>Computer Systems Servicing</h2>
                    <p className='text-base lg:text-lg text-white'>  
                        I am certified in Computer Systems Servicing (NC2) by TESDA, demonstrating my ability to troubleshoot,
                        repair, and maintain computer systems and networks. This certification reflects my expertise in
                        ensuring the efficient operation and security of computer systems, highlighting my practical
                        skills in IT support and hardware management.
                    </p>
                </div>           
            </div>  

            
             
        </div>
        
        
        

    </div>

    
    
  )
}

export default Certificates