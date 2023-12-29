import mem from './assests/iconmembers.png'
import clubs from './assests/iconclubs.png'
import events from './assests/iconevent.png'
import pay from './assests/iconpay.png'
const Section4 = () => {
    return (
        <div className="flex px-[40px] lg:px-[50px] xl:px-[144px] py-[64px] justify-between items-center bg-[#F5F7FA]">
            <div className='flex flex-col items-start gap-[8px] flex-shrink-0'>
                <h3 className='text-[#4D4D4D] text-[36px] font-[600]'>Helping a local <br /> <span className='text-[#4CAF4F]'>business reinvent itself</span></h3>
                <p className='self-stretch text-[16px]'>We reached here with our hard work and dedication</p>
            </div>

            <div className='flex flex-col items-center gap-[40px]'>
                <div className='flex items-center gap-[30px]'>
                    <div className='flex items-center gap-[16px]'>
                        <div><img src={ mem }/></div>
                        <div>
                            <p className='text-[28px] text-[#4D4D4D] font-[700]'>2,245,341</p>
                            <p className='text-[16px] text-[#717171]'>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[16px]'>
                        <div><img src={ clubs }/></div>
                        <div>
                            <p className='text-[28px] text-[#4D4D4D] font-[700]'>46,328</p>
                            <p className='text-[16px] text-[#717171]'>Clubs</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[30px]'>
                    <div className='flex items-center gap-[16px]'>
                        <div><img src={ events }/></div>
                        <div>
                            <p className='text-[28px] text-[#4D4D4D] font-[700]'>828,867</p>
                            <p className='text-[16px] text-[#717171]'>Event Bookings</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[16px]'>
                        <div><img src={ pay }/></div>
                        <div>
                            <p className='text-[28px] text-[#4D4D4D] font-[700]'>1,926,436</p>
                            <p className='text-[16px] text-[#717171]'>Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Section4