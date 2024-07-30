
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
const Navbar = () => {
    return (
        <div className='bg-[#34113F] drop-shadow-md'>

            <div className="container m-auto py-4">

                <Link to='/' >
                    <img src={logo} alt="logo-image" className='h-12  ' />
                </Link>
            </div>
        </div>
    )
}

export default Navbar