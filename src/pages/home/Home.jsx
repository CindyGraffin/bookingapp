import { Navbar, Header, Featured, PropertyList, LovedProperties, MailList, Footer } from '../../components/index';
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
				<LovedProperties/>
				<MailList/>
				<Footer/>
			</div>
		</div>
	)
};

export default Home;
