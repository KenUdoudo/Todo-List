import Navbar from "./Navbar";
import heroimg from './assests/illustration.png'
const Hero = () => {
    return (
    <div>
        <Navbar />

        <div className="flex flex-row px-[144px] py-[96px] items-center self-stretch gap-[104px]">
            <div>
                <h2 className="text-[64px] text-[#4D4D4D] font-semibold">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span></h2>
                <p className="text-[16px]">Where to grow your business as a photographer: site or social media?</p>
                <p className="px-[32px] py-[14px] bg-[#4CAF4F] ">Register</p>
            </div>
            <div>
                <img src={ heroimg }/>
            </div>
        </div>
    </div>
    );
}
 
export default Hero;