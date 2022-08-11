import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Header, MailList, Footer } from "../../components";
import useFetch from "../../hooks/useFetch";
import './hotel.css';

const Hotel = () => {
	const location = useLocation()
	const id = location.pathname.split('/')[2]
	const [slideNumber, setSlideNumber] = useState(0)
	const [open, setOpen] = useState(false)
	const { data, loading, error} = useFetch(
		`http://localhost:8800/api/hotels/find/${id}`
	);
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
	const handleOpen = (i) => {
		setSlideNumber(i)
		setOpen(true)
	}
	const handleMove = (direction) => {
		let newSlideIndex;
		if (direction === 'left') {
			newSlideIndex = slideNumber === 0 ? 5 : slideNumber - 1
		} else if (direction === 'right') {
			newSlideIndex = slideNumber === 5 ? 0 : slideNumber + 1
		}
		setSlideNumber(newSlideIndex)
	}
	return (
		<div>
			<Navbar/>
			<Header type="list"/>
			{loading ? "loading" : <div className="hotel__container">
				{open && (
				<div className="slider">
					<FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
					<FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove('left')}/>
					<div className="slider-wrapper">
						<img src={photos[slideNumber].src} alt="" className="slider-img" />
					</div>
					<FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('right')}/>
				</div>)
				}
				<div className="hotel-wrapper">
					<button className="book-now">Réserver maintenant</button>
					<h1 className="hotel-title">{data.name}</h1>
					<div className="hotel-address">
						<FontAwesomeIcon icon={faLocationDot}/>
						<span>{data.address}</span>
					</div>
					<span className="hotel-distance">
						Localisation excellente - A {data.distance}m du centre-ville
					</span>
					<span className="hotel-price-highlight">
						Reservez une chambre à partir de {data.cheapestPrice}€ et obtenez le taxi gratuit à partir de l'aéroport !
					</span>
					<div className="hotel-images">
						{photos.map((photo, i) => {
							return (
								<div className="hotel-img-wrapper" key={i}>
									<img src={photo.src} alt="" className="hotel-img" onClick={() => handleOpen(i)}/>
								</div>
							)
						})}
					</div>
					<div className="hotel-details">
						<div className="hotel-details-text">
							<h1 className="hotel-title">{data.title}</h1>
							<p className="hotel-desc">
							{data.desc}
							</p>
						</div>
						<div className="hotel-details-price">
							<h1>Parfait pour un séjour dans la grande ville de New-York</h1>
							<span>Localisé dans le centre, cet hôtel possède un excellen score de localisation de 9.8 !</span>
							<h2>
								<b>{data.cheapestPrice*7}€</b> <span className="price-nights">(7 nuits)</span>
							</h2>
							<button>Réserver maintenant</button>
						</div>
					</div>
				</div>
				<MailList/>
				<Footer/>
			</div>}
		</div>
	);
};

export default Hotel;
