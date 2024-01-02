import logo from './assests/footerlogo.png'
const Footer = () => {
    return (
        <div className="font-inter flex px-[165px] py-[64px] items-start gap-[125px bg-[#263238]">
            <div className="flex flex-col items-start gap-[40px]">
                <div><img src={ logo }/></div>
                <div className='flex flex-col gap-1'>
                    <p className='text-[16px] text-[#F5F7FA]'>Copyright © 2020 Nexcent ltd.</p>
                    <p className='text-[16px] text-[#F5F7FA]'>All rights reserved</p>
                </div>
            </div>

            <div>


            </div>
        </div>
    );
}
 
export default Footer;