import logo from './assests/logo.png'
const Navbar = () => {
    return (
        <div className='flex flex-shrink-0 justify-around items-center h-[84px] bg-[#F5F7FA]'>
            <div><img src={ logo }/></div>
            <div>
                <ul className='inline-flex justify-center items-center gap-[50px] text-[16px]'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Feature</li>
                    <li>Product</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='inline-flex items-start gap-[14px]'>
                <p className='flex px-[20px] py-[10px] bg-[#F5F7FA] rounded-[6px] text-[14px]'>Login</p>
                <p className='flex px-[20px] py-[10px] bg-[#4CAF4F] rounded-[6px] text-[14px] text-white'>Sign up</p>
            </div>
        </div>
    );
}
 
export default Navbar;