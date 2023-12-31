import one from './assests/logo-1.png'
import two from './assests/logo-2.png'
import three from './assests/logo-3.png'
import four from './assests/logo-4.png'
import five from './assests/logo-5.png'
import six from './assests/logo-6.png'
import arrow from './assests/right.png'
import tesla from './assests/image-9.png'
const Section6 = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center py-[20px] px-[40px] lg:px-[100px] xl:px-[144px] self-stretch font-inter gap-[78px] bg-[#F5F7FA]'>
            <div><img src={ tesla }/></div>

            <div className="flex flex-col items-center md:items-start gap-[10px] w-full md:w-3/5 lg:w-3/4">
                <p className='text-[#717171] text-[16px] font-[500] self-stretch'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <p className='text-[#4CAF4F] text-[20px] font-[600] self-stretch'>Tim Smith</p>
                <p className='text-[#89939E] text-[16px] font-[400] self-stretch'>British Dragon Boat Racing Association</p>

                <div className='flex h-[98px] justify-between items-center self-stretch'>
                <div className='px-[10px] md:px-0'><img src={ one }/></div>
                <div className='px-[10px] md:px-0'><img src={ two }/></div>
                <div className='px-[10px] md:px-0'><img src={ three }/></div>
                <div className='px-[10px] md:px-0'><img src={ four }/></div>
                <div className='px-[10px] md:px-0'><img src={ five }/></div>
                <div className='px-[10px] md:px-0'><img src={ six }/></div>
                <div className='px-[10px] md:px-0 flex p-[8px] items-center gap-[8px]'>
                    <p className='text-[#4CAF4F] text-[20px] font-[600]'>Meet all customers</p>
                    <div><img src={ arrow }/></div>
                </div>
            </div>
            </div>

        </div>
    );
}
 
export default Section6;