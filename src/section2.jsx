import mem from './assests/iconmem.png'
const Section2 = () => {
    return (
        <div className="px-[40px]">
            <div>
                <h3>Manage your entire community in a single system</h3>
                <p>Who is Nextcent suitable for?</p>
            </div>

            <div>
                <div className='flex flex-col w-[299px] px-[32px] py-[24px] items-center gap-[8px] flex-shrink'>
                    <div><img src={ mem }/></div>
                    <h3 className='font-[#4D4D4D]'>Membership Organisations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

            </div>
        </div>
    );
}
 
export default Section2;