import arrow from './assests/right.png'
import one from './assests/image-18.png'
import two from './assests/image-19.png'
import three from './assests/image-20.png'
const Section7 = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-[8px] text-center px-[40px] md:px-[166px] py-[5px] font-inter">
                <h3 className='text-[#4D4D4D] text-[20px] md:text-[36px] font-[600] self-stretch'>Caring is the new marketing</h3>
                <p className='w-4/5 md:w-[628px] text-[#717171] text-[16px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>

            <div className='flex flex-wrap gap-[10px] md:gap-0 px-[10px] xl:px-[144px] justify-around xl:justify-between items-center py-3'>
                <div className='flex flex-col items-center px-[10px] xl:px-0'>
                    <div><img src={ one }/></div>
                    <div className='flex p-[16px] flex-col items-center gap-[16px] bg-[#F5F7FA] rounded-[8px] shadow-[0px 8px 16px 0px rgba(171, 190, 209, 0.40);] mt-[-96px]'>
                        <p className='w-[285px] md:w-[200px] xl:w-[285px] text-center text-[#717171] text-[20px] font-[600]'>Creating Streamlined Safeguarding Processes with OneRen</p>
                        <div className='flex p-[8px] justify-center items-center gap-[8px] self-stretch'>
                            <p className='text-[#4CAF4F] text-[20px] font-[600]'>Readmore</p>
                            <img src={ arrow }/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center px-[10px] xl:px-0'>
                    <div><img src={ two }/></div>
                    <div className='flex p-[16px] flex-col items-center gap-[16px] bg-[#F5F7FA] rounded-[8px] shadow-[0px 8px 16px 0px rgba(171, 190, 209, 0.40);] mt-[-96px]'>
                        <p className='w-[285px] md:w-[200px] xl:w-[285px] text-center text-[#717171] text-[20px] font-[600]'>What are your safeguarding responsibilities and how can you manage them?</p>
                        <div className='flex p-[8px] justify-center items-center gap-[8px] self-stretch'>
                            <p className='text-[#4CAF4F] text-[20px] font-[600]'>Readmore</p>
                            <img src={ arrow }/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center px-[10px] xl:px-0'>
                    <div><img src={ three }/></div>
                    <div className='flex p-[16px] flex-col items-center gap-[16px] bg-[#F5F7FA] rounded-[8px] shadow-[0px 8px 16px 0px rgba(171, 190, 209, 0.40);] mt-[-96px]'>
                        <p className='w-[285px] md:w-[200px] xl:w-[285px] text-center text-[#717171] text-[20px] font-[600]'>Revamping the Membership Model with Triathlon Australia</p>
                        <div className='flex p-[8px] justify-center items-center gap-[8px] self-stretch'>
                            <p className='text-[#4CAF4F] text-[20px] font-[600]'>Readmore</p>
                            <img src={ arrow }/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Section7;