import arrow from './assests/right2.png'
const Section8 = () => {
    return (
        <div className='flex flex-col py-[32px] items-center gap-[32px] bg-[#F5F7FA]'>
            <h1 className='font-[600] text-[64px] text-center'>Pellentesque suscipit <br /> fringilla libero eu.</h1>
            <div className='flex justify-center items-center gap-[8px] px-[25px] lg:px-[32px] py-[7px] lg:py-[14px] bg-[#4CAF4F] text-white text-[16px] rounded-[4px] '>
                <p>Get a Demo</p>
                <img src={ arrow }/>
            </div>
        </div>
    );
}
 
export default Section8;