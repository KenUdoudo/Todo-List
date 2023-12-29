import mem from './assests/iconmembers.png'
const Section4 = () => {
    return (
        <div className="bg-[#F5F7FA]">
            <div>
                <h3>Helping a local <span>business reinvent itself</span></h3>
                <p>We reached here with our hard work and dedication</p>
            </div>

            <div>
                <div>
                    <div className='flex items-center gap-[16px]'>
                        <div><img src={ mem }/></div>
                        <div>
                            <p className='text-[28px] text-[#4D4D4D] font-[700]'>2,245,341</p>
                            <p className='text-[16px] text-[#717171]'>Members</p>
                        </div>
                    </div>


                </div>




            </div>
        </div>
    );
}
 
export default Section4