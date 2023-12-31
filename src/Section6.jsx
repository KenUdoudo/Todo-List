import one from './assests/logo-1.png'
import two from './assests/logo-2.png'
import three from './assests/logo-3.png'
import four from './assests/logo-4.png'
import five from './assests/logo-5.png'
import six from './assests/logo-6.png'
import arrow from './assests/right.png'
const Section6 = () => {
    return (
        <div>
            <div><img src="" alt="" /></div>

            <div>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <p>Tim Smith</p>
                <p>British Dragon Boat Racing Association</p>

                <div className='flex h-[98px] justify-between items-center self-stretch'>
                <div className='px-[10px] md:px-0'><img src={ one }/></div>
                <div className='px-[10px] md:px-0'><img src={ two }/></div>
                <div className='px-[10px] md:px-0'><img src={ three }/></div>
                <div className='px-[10px] md:px-0'><img src={ four }/></div>
                <div className='px-[10px] md:px-0'><img src={ five }/></div>
                <div className='px-[10px] md:px-0'><img src={ six }/></div>
                <div className='px-[10px] md:px-0'>
                    <p>Meet all customers</p>
                    <div><img src={ arrow }/></div>
                </div>
            </div>
            </div>

        </div>
    );
}
 
export default Section6;