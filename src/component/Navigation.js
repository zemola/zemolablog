import '../styles/Navigation.scss';
import logo from "../image/logo.png";

const Navigation = () => {
    return ( 
        <div className='navigation'>
            <div className='logo'><img src={logo} alt='logo'/></div>
        <div className='navbar'>
            <li><a href="/">Home</a></li>
            <li><a href="/">Create</a></li>
            <li><a href="/">About</a></li>
        </div>
        </div>
        
        );
}
 
export default Navigation;