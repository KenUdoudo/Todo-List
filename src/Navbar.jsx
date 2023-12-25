import logo from './assests/logo.png'
import hamburger from './assests/user-interface-burger.png'
const Navbar = () => {
    return (
        <div className='flex flex-shrink-0 justify-around items-center h-[84px] bg-[#F5F7FA]'>
            <div className='lg:w-[154px] md:w-[120px]'><img src={ logo }/></div>
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
            <div>
                <img src={ hamburger }/>
            </div>
        </div>
    );
}
 
export default Navbar;