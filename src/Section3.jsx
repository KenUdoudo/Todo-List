import three from './assests/frame-35.png'
const Section3 = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center px-[20px] lg:px-[100px] xl:px-[144px] font-inter">
            <div className='px-[30px] lg:px-0'><img src={ three }/></div>


            <div className="flex flex-col items-center md:items-start gap-[10px] lg:gap-[20px] xl:gap-[32px] w-[400px] md:w-[661px]">
                <h2 className="px-[20px] md:px-0 text-[25px] md:text-[36px] text-[#4D4D4D] font-semibold text-center md:text-left">The unseen of spending three years at Pixelgrade</h2>
                <p className="px-[20px] md:px-0 text-[12px] lg:text-[16px] text-[#717171] text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <p className="px-[25px] lg:px-[32px] py-[7px] lg:py-[14px] bg-[#4CAF4F] text-white text-[16px] rounded-[4px] ">Learn More</p>
            </div>
        </div>
    );
}
 
export default Section3;