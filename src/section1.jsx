import one from './assests/logo-1.png'
import two from './assests/logo-2.png'
import three from './assests/logo-3.png'
import four from './assests/logo-4.png'
import five from './assests/logo-5.png'
import six from './assests/logo-6.png'
import seven from './assests/logo-7.png'
const Section1 = () => {
    return (
        <div className='flex flex-col px-[20px] md:px-[144px] items-center gap-[8px] md:gap-[16px] text-center font-inter'>
            <div>
                <h3 className='text-[20px] md:text-[36px] text-[600] text-[#4D4D4D]'>Our Clients</h3>
                <p className='text-[16px] text-[#717171]'>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='flex h-[98px] justify-between items-center self-stretch'>
                <div className='px-[10px] md:px-0'><img src={ one }/></div>
                <div className='px-[10px] md:px-0'><img src={ two }/></div>
                <div className='px-[10px] md:px-0'><img src={ three }/></div>
                <div className='px-[10px] md:px-0'><img src={ four }/></div>
                <div className='px-[10px] md:px-0'><img src={ five }/></div>
                <div className='px-[10px] md:px-0'><img src={ six }/></div>
                <div className='px-[10px] md:px-0'><img src={ seven }/></div>
            </div>
        </div>
    );
}
 
export default Section1;