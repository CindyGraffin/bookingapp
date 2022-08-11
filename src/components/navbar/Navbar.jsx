import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
        <div className='navbar'>
            <div className="nav__container">
                <Link to='/' style={{color: "inherit", textDecoration: "none"}}>
                    <span className="logo">BookingApp</span>
                </Link>
                <div className="nav-items">
                    <button className='nav-button'>Créer un compte</button>
                    <button className='nav-button'>Se connecter</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
