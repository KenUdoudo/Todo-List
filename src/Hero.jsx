import Navbar from "./Navbar";
import heroimg from './assests/illustration.png'
const Hero = () => {
    return (
    <div>
        <Navbar />

        <div className="flex flex-row px-[144px] py-[96px] items-center self-stretch gap-[104px] bg-[#F5F7FA]">
            <div className="flex flex-col items-start gap-[32px]">
                <h2 className="text-[64px] text-[#4D4D4D] font-semibold leading-[76px]">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span></h2>
                <p className="text-[16px]">Where to grow your business as a photographer: site or social media?</p>
                <p className="px-[32px] py-[14px] bg-[#4CAF4F] text-white text-[16px] rounded-[4px] ">Register</p>
            </div>
            <div>
                <img src={ heroimg }/>
            </div>
        </div>
    </div>
    );
}
 
export default Hero;