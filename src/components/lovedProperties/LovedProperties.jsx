import useFetch from '../../hooks/useFetch';
import './lovedProperties.css';

const LovedProperties = () => {
	const { data, loading, error } = useFetch(
		"http://localhost:8800/api/hotels?featured=true&limit=4"
	);
	const images = [
		'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		'https://images.unsplash.com/photo-1625244695851-1fc873f942bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		'https://images.unsplash.com/photo-1614568112072-770f89361490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
		'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
	]
	console.log(data);
	return (
		<div className="loved-properties">
			{
				loading ? "Loading" :
				<>
					{data.map((item, i) => (
								<div className="loved-properties-item" key={item._id}>
								<img
									src={images[i]}
									alt=""
									className="loved-properties-img"
								/>
								<span className="loved-properties-name">{item.name}</span>
								<span className="loved-properties-city">{item.city}</span>
								<span className="loved-properties-price">
									A partir de {item.cheapestPrice}€
								</span>
								{item.rating && <div className="loved-properties-rating">
									<button>{item.rating.toFixed(1)}</button>
									<span>Perfect</span>
								</div>}
							</div>
					))}
				</>
			}
			
			
		</div>
	);
};

export default LovedProperties;
