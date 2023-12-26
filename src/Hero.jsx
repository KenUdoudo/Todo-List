import Navbar from "./Navbar";
import heroimg from './assests/illustration.png'
const Hero = () => {
    return (
    <div>
        <Navbar />

        <div className="flex flex-col md:flex-row md:px-[30px] lg:px-[50px] xl:px-[144px] py-[60px] md:py-[96px] items-center self-stretch gap-[60px] md:gap-[104px] bg-[#F5F7FA]">
            <div className="flex flex-col items-center md:items-start gap-[15px] lg:gap-[20px] xl:gap-[32px]">
                <h2 className="text-center md:text-start text-[48px] lg:text-[58px] xl:text-[64px] text-[#4D4D4D] font-semibold leading-[45px] md:leading-[50px] lg:leading-[76px]">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span></h2>
                <p className="px-[20px] md:px-0 text-center md:text-start text-[16px]">Where to grow your business as a photographer: site or social media?</p>
                <p className="px-[25px] lg:px-[32px] py-[7px] lg:py-[14px] bg-[#4CAF4F] text-white text-[16px] rounded-[4px] ">Register</p>
            </div>
            <div className="px-[100px] md:px-0">
                <img src={ heroimg }/>
            </div>
        </div>
    </div>
    );
}
 
export default Hero;