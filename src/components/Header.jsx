import '../styles/Header.css';
import logo from '../images/ps-logo.png';

export const Header = () => {
    return (
       
            <nav>
                <img className='logo' src={logo} alt='Logo' />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Console</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Prices</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
                <div className='sign-up'>Sign Up</div>
            </nav>
       
    )
}