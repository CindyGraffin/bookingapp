import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBed,
	faPlane,
	faCar,
	faTaxi,
	faIcons,
    faPerson
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
	return (
		<div className="header">
			<div className="header__container">
				<div className="header-list">
					<div className="header-list-item active">
						<FontAwesomeIcon icon={faBed} />
						<span>Séjours</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faPlane} />
						<span>Vols</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faCar} />
						<span>Locations de voiture</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faIcons} />
						<span>Loisirs</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Taxis</span>
					</div>
				</div>
                <h1 className="header-title">Prévoyez le voyage de vos rêves !</h1>
                <p className="header-desc">Solutions clés en main, récompenses pour vos voyages, et mieux encore avec un compte gratuit BookingApp.</p>
                <button className="header-btn">Se connecter / Créer un compte</button>
                <div className="header-search">
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faBed} className='header-icon'/>
                        <input type="text" placeholder="Où voulez-vous aller ?" className="header-search-input"/>
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faCalendarDays} className='header-icon'/>
                        <span className="header-search-text">date to date</span>
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faPerson} className='header-icon'/>
                        <span className="header-search-text">2 adults 2 children 1 room</span>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Header;
