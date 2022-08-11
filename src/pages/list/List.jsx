import "./list.css";
import { Header, Navbar, SearchItem } from "../../components";
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);
	const [min, setMin] = useState(undefined);
	const [max, setMax] = useState(undefined);

	const { data, loading, error, reFetch } = useFetch(
		`http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
	);
	console.log(data);
	const handleClick = () => {
		reFetch()
	}
	const {dispatch} = useContext(SearchContext)
	console.log(options)
	const handleChange = async (e) => {
		await setOptions({...options, rooms: e.target.value})
		dispatch({type: "CHANGE_ROOMS", payload: options.rooms})
	}

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="list__container">
				<div className="list-wrapper">
					<div className="list-search">
						<h1 className="list-title">Rechercher</h1>
						<div className="list-search-item">
							<label htmlFor="destination">Destination</label>
							<input type="text" placeholder={destination} onChange={(e) => setDestination(e.target.value)}/>
						</div>
						<div className="list-search-item">
							<label htmlFor="checkIn">Dates de séjour</label>
							<span
								className='search-dates'
								onClick={() => setOpenDate(!openDate)}
							>{`Du ${format(
								date[0].startDate,
								"dd/MM/yyyy"
							)} au ${format(
								date[0].endDate,
								"dd/MM/yyyy"
							)}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) =>
										setDate([item.selection])
									}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>
						<div className="list-search-item">
							<label className="list-search-options">Options</label>
							<div className="list-search-option-item">
								<span className="list-search-option-text">
									Prix Min <small>par nuit (en €)</small>
								</span>
								<input
									type="number"
									className="list-search-option-input"
									min={1}
									onChange={((e) => setMin(e.target.value))}
								/>
							</div>
							<div className="list-search-option-item">
								<span className="list-search-option-text">
									Prix Max <small>par nuit (en €)</small>
								</span>
								<input
									type="number"
									className="list-search-option-input"
									min={1}
									onChange={((e) => setMax(e.target.value))}
								/>
							</div>
							<div className="list-search-option-item">
								<span className="list-search-option-text">
									Adultes 
								</span>
								<input
									type="number"
									className="list-search-option-input"
									placeholder={options.adults}
									min={1}
								/>
							</div>
							<div className="list-search-option-item">
								<span className="list-search-option-text">
									Enfants
								</span>
								<input
									type="number"
									className="list-search-option-input"
									placeholder={options.children}
									min={0}
								/>
							</div>
							<div className="list-search-option-item">
								<span className="list-search-option-text">
									Chambres
								</span>
								<input
									type="number"
									className="list-search-option-input"
									placeholder={options.rooms}
									min={1}
									onChange={handleChange}
								/>
							</div>
						</div>
						<button onClick={handleClick}>Rechercher</button>
					</div>
					<div className="list-result">
						{ loading ? "loading" : 
							(
								<>
									{data.map((item) => (
										<SearchItem item={item} key={item._id}/>
									))}
								</>
							)
						}
						<SearchItem/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
