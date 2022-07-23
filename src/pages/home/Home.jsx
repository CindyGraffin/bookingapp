import { Navbar, Header, Featured, PropertyList } from '../../components/index';
import './home.css';

const Home = () => {
	return (
		<div>
			<Navbar/>
			<Header/>
			<div className="home__container">
				<Featured/>
				<h1 className='home-title'> Rechercher par type d'hébergement</h1>
				<PropertyList/>
				<h1 className='home-title'>Coups de coeur</h1>
			</div>
		</div>
	)
};

export default Home;
