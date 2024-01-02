import logo from './assests/footerlogo.png'
import ig from './assests/ig.png'
import bball from './assests/bball.png'
import twitter from './assests/twitter.png'
import yt from './assests/yt.png'
const Footer = () => {
    return (
        <div className="font-inter flex px-[165px] py-[64px] items-start gap-[125px bg-[#263238]">
            <div className="flex flex-col items-start gap-[40px]">
                <div><img src={ logo }/></div>
                <div className='flex flex-col gap-1'>
                    <p className='text-[16px] text-[#F5F7FA]'>Copyright © 2020 Nexcent ltd.</p>
                    <p className='text-[16px] text-[#F5F7FA]'>All rights reserved</p>
                </div>
                <div className='flex items-start gap-4'>
                    <img src={ ig }/>
                    <img src={ bball }/>
                    <img src={ twitter }/>
                    <img src={ yt }/>
                </div>
            </div>

            <div>


            </div>
        </div>
    );
}
 
export default Footer;