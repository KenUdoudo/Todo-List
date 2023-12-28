import mem from './assests/iconmem.png'
import nat from './assests/icon-nat.png'
import club from './assests/iconclub.png'
const Section2 = () => {
    return (
        <div className="py-[40px]">
            <div className='text-center'>
                <h3 className='text-[36px] font-[600] text-[#4D4D4D]'>Manage your entire community <br/> in a single system</h3>
                <p className='text-[16px] text-[#717171]'>Who is Nextcent suitable for?</p>
            </div>

            <div className='flex flex-col md:flex-row px-[40px] lg:px-[100px] xl:px-[144px] justify-between items-center'>
                <div className='flex flex-col w:-[190px] lg:w-[299px] px-[32px] py-[24px] items-center gap-[8px] flex-shrink text-center'>
                    <div><img src={ mem }/></div>
                    <h3 className='text-[#4D4D4D] text-[28px] font-[700]'>Membership Organisations</h3>
                    <p className='text-[#717171] text-[14px] font-[400]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className='flex flex-col w:-[190px] lg:w-[299px] px-[32px] py-[24px] items-center gap-[8px] flex-shrink text-center'>
                    <div><img src={ nat }/></div>
                    <h3 className='text-[#4D4D4D] text-[28px] font-[700]'>National Associations</h3>
                    <p className='text-[#717171] text-[14px] font-[400]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className='flex flex-col w:-[190px] lg:w-[299px] px-[32px] py-[24px] items-center gap-[8px] flex-shrink text-center'>
                    <div><img src={ club }/></div>
                    <h3 className='text-[#4D4D4D] text-[28px] font-[700]'>Clubs And Groups</h3>
                    <p className='text-[#717171] text-[14px] font-[400]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

            </div>
        </div>
    );
}
 
export default Section2;