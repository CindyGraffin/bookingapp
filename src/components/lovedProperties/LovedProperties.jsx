import './lovedProperties.css';

const LovedProperties = () => {
	return (
		<div className="loved-properties">
			<div className="loved-properties-item">
				<img
					src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt=""
					className="loved-properties-img"
				/>
				<span className="loved-properties-name">Ocean Luxe Resort</span>
				<span className="loved-properties-city">Punta Cana</span>
				<span className="loved-properties-price">
					A partir de 2300€
				</span>
				<div className="loved-properties-rating">
					<button>9.6</button>
					<span>Perfect</span>
				</div>
			</div>
			<div className="loved-properties-item">
				<img
					src="https://images.unsplash.com/photo-1625244695851-1fc873f942bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt=""
					className="loved-properties-img"
				/>
				<span className="loved-properties-name">Madrid Hotel</span>
				<span className="loved-properties-city">Madrid</span>
				<span className="loved-properties-price">
					A partir de 180€
				</span>
				<div className="loved-properties-rating">
					<button>8.7</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="loved-properties-item">
				<img
					src="https://images.unsplash.com/photo-1614568112072-770f89361490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
					alt=""
					className="loved-properties-img"
				/>
				<span className="loved-properties-name">Luminado Hotel</span>
				<span className="loved-properties-city">Majorque</span>
				<span className="loved-properties-price">
					A partir de 165€
				</span>
				<div className="loved-properties-rating">
					<button>8.0</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="loved-properties-item">
				<img
					src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
					alt=""
					className="loved-properties-img"
				/>
				<span className="loved-properties-name">Beach Palma Resort</span>
				<span className="loved-properties-city">Bora Bora</span>
				<span className="loved-properties-price">
					A partir de 2150€
				</span>
				<div className="loved-properties-rating">
					<button>9.3</button>
					<span>Perfect</span>
				</div>
			</div>
		</div>
	);
};

export default LovedProperties;
