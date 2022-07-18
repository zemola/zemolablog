import '../styles/Navigation.scss';
import logo from "../image/logo.png";
import { Link } from 'react-router-dom'

const Navigation = () => {
    return ( 
        <div className='navigation'>
            <div className='logo'><img src={logo} alt='logo'/></div>
        <div className='navbar'>
            <li><Link to="/">Home </Link></li>
            <li><Link to = "/Create">Create </Link></li>
            {/* <li><Link to ="/about">About</Link></li> */}
        </div>
        </div>
        
        );
}
 
export default Navigation;