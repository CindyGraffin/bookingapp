import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Header } from "../../components";
import './hotel.css';


const Hotel = () => {
	const photos = [
		{
			src: "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
		},
		{
			src: "https://images.unsplash.com/photo-1566681990869-2ab77a7b6461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
		},
		{
			src: "https://images.unsplash.com/photo-1552960226-639240203497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
		},
		{
			src: "https://images.unsplash.com/photo-1633765253819-85e3497b075f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
		},
		{
			src: "https://images.unsplash.com/photo-1596072312930-9c7f668d3193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
		},
		{
			src: "https://images.unsplash.com/photo-1516681859000-292df1ed3e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
		}		
	]
	return (
		<div>
			<Navbar/>
			<Header type="list"/>
			<div className="hotel__container">
				<div className="hotel-wrapper">
					<button className="book-now">Réserver maintenant</button>
					<h1 className="hotel-title">Grand Hotel</h1>
					<div className="hotel-address">
						<FontAwesomeIcon icon={faLocationDot}/>
						<span> Elton St 125, New-York</span>
					</div>
					<span className="hotel-distance">
						Localisation excellente - A 500m du centre-ville
					</span>
					<span className="hotel-price-highlight">
						Reservez une chambre à partir de 250€ et obtenez le taxi gratuit à partir de l'aéroport !
					</span>
					<div className="hotel-images">
						{photos.map((photo, i) => {
							return (
								<div className="hotel-img-wrapper" key={i}>
									<img src={photo.src} alt="" className="hotel-img"/>
								</div>
							)
						})}
					</div>
					<div className="hotel-details">
						<div className="hotel-details-text">
							<h1 className="hotel-title">Restez dans le coeur de New-York !</h1>
							<p className="hotel-desc">
							Situé à 500 mètres du centre-ville, le Grand Hotel propose un restaurant, un salon, un bar sur le toit ouvert en saison, des chambres avec une connexion Wi-Fi gratuite, ainsi qu'une salle de jeux avec une table de ping-pong. Les chambres du Grand Hotel comprennent la climatisation, un bureau et une télévision par câble. La salle de bains privative est pourvue d'un sèche-cheveux. Certaines chambres offrent une vue magnifique sur la ville. Le restaurant Empellón sur place sert des collations de bar et des tacos dans un cadre classe mais décontracté. Vous savourerez un cocktail au bar-salon sur le toit. De la nourriture et des cocktails sont disponibles au bar-salon du hall, ouvert tous les jours.
							</p>
						</div>
						<div className="hotel-details-price">
							<h1>Parfait pour un séjour dans la grande ville de New-York !</h1>
							<span>Localisé dans le centre, cet hôtel possède un excellen score de localisation de 9.8 !</span>
							<h2>
								<b>1400€ (7 jours)</b>
							</h2>
							<button>Réserver maintenant</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hotel;
