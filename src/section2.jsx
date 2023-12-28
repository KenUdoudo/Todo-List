import mem from './assests/iconmem.png'
import nat from './assests/icon-nat.png'
const Section2 = () => {
    return (
        <div className="px-[40px]">
            <div>
                <h3>Manage your entire community in a single system</h3>
                <p>Who is Nextcent suitable for?</p>
            </div>

            <div>
                <div className='flex flex-col w-[299px] px-[32px] py-[24px] items-center gap-[8px] flex-shrink text-center'>
                    <div><img src={ mem }/></div>
                    <h3 className='text-[#4D4D4D] text-[28px] font-[700]'>Membership Organisations</h3>
                    <p className='text-[#717171] text-[14px] font-[400]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className='flex flex-col w-[299px] px-[32px] py-[24px] items-center gap-[8px] flex-shrink text-center'>
                    <div><img src={ nat }/></div>
                    <h3 className='text-[#4D4D4D] text-[28px] font-[700]'>Membership Organisations</h3>
                    <p className='text-[#717171] text-[14px] font-[400]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className='flex flex-col w-[299px] px-[32px] py-[24px] items-center gap-[8px] flex-shrink text-center'>
                    <div><img src={ mem }/></div>
                    <h3 className='text-[#4D4D4D] text-[28px] font-[700]'>Membership Organisations</h3>
                    <p className='text-[#717171] text-[14px] font-[400]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

            </div>
        </div>
    );
}
 
export default Section2;