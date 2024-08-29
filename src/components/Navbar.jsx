import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
       
        <BrowserRouter>
            <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            
                <h1 className='text-3xl font-bold ml-4 bg-gradient-to-r from-orange-500 to-pink-500 inline-block text-transparent bg-clip-text'>ERIBERTO B. PANERIO JR.</h1> 
                <ul className='hidden md:flex'>
                    
                    
                    <li className='p-5'><Link to='#home' smooth>Home</Link></li>
                    <li className='p-5'><Link to='#about' smooth>About</Link></li>
                    <li className='p-5'><Link to='#certifications' smooth>Certifications</Link></li>
                    <li className='p-5'><Link to='#project' smooth>Projects</Link></li>
                </ul>

                <div onClick={handleNav} className='block md:hidden mr-6 '>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
                                : 'fixed left-[-100%]'}>

                    <h1 className='text-3xl primary-color ml-4'>Eriberto Panerio Jr.</h1> 
                    <ul className='p-8 text-2xl'>
                        
                    <li className='p-2'><Link to='#home' smooth>Home</Link></li>
                    <li className='p-2'><Link to='#about' smooth>About</Link></li>
                    <li className='p-2'><Link to='#certifications' smooth>Certifications</Link></li>
                    <li className='p-2'><Link to='#project' smooth>Projects</Link></li>
                    </ul>

                </div>


            </div>
        </BrowserRouter>
        
        
        
    )
}

export default Navbar