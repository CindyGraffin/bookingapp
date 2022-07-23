import './navbar.css';

const Navbar = () => {
	return (
        <div className='navbar'>
            <div className="nav__container">
                <span className="logo">BookingApp</span>
                <div className="nav-items">
                    <button className='nav-button'>Créer un compte</button>
                    <button className='nav-button'>Se connecter</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
