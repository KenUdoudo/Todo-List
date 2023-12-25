import logo from './assests/logo.png'
import hamburger from './assests/user-interface-burger.png'
import { useState } from 'react';
const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
    return (
        <div className='flex flex-shrink-0 justify-between px-[30px] md:px-0 md:justify-around items-center h-[84px] bg-[#F5F7FA]'>
            <div className='lg:w-[154px] md:w-[120px] w-[100px]'><img src={ logo }/></div>
            <div className='hidden md:block'>
                <ul className='inline-flex justify-center items-center lg:gap-[50px] md:gap-[20px] lg:text-[16px] md:text-[14px] cursor-pointer'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Feature</li>
                    <li>Product</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='hidden md:inline-flex items-start gap-[14px]'>
                <p className='flex px-[20px] py-[10px] bg-[#F5F7FA] rounded-[6px] text-[14px] cursor-pointer'>Login</p>
                <p className='flex px-[20px] py-[10px] bg-[#4CAF4F] rounded-[6px] text-[14px] text-white cursor-pointer'>Sign up</p>
            </div>
            <div className='md:hidden relative'>
                <img src={ hamburger } onClick={ toggleMenu }/>
            </div>
            {isOpen && (
                 <div className='absolute md:hidden top-[50px] right-0 mt-2 bg-white p-4'>
                 <ul className='flex flex-col justify-center items-center lg:gap-[50px] md:gap-[20px] lg:text-[16px] md:text-[14px] cursor-pointer'>
                     <li>Home</li>
                     <li>Service</li>
                     <li>Feature</li>
                     <li>Product</li>
                     <li>Testimonial</li>
                     <li>FAQ</li>
                 </ul>
                 <p className='flex px-[20px] py-[10px] bg-[#F5F7FA] rounded-[6px] text-[14px] cursor-pointer'>Login</p>
                <p className='flex px-[20px] py-[10px] bg-[#4CAF4F] rounded-[6px] text-[14px] text-white cursor-pointer'>Sign up</p>
             </div>
            )}
        </div>
    );
}
 
export default Navbar;