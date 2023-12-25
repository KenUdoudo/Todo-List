import logo from './assests/logo.png'
const Navbar = () => {
    return (
        <div className='flex flex-col'>
            <div><img src={ logo }/></div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Feature</li>
                    <li>Product</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <p>Login</p>
                <p>Sign up</p>
            </div>
        </div>
    );
}
 
export default Navbar;