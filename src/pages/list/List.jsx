import "./list.css";
import { Header, Navbar } from "../../components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);

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
							<input type="text" placeholder={destination} />
						</div>
						<div className="list-search-item">
							<label htmlFor="checkIn">Dates de séjour</label>
							<span
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
							<label>Options</label>
							<div className="list-search-option-item">
								<span className="list-search-option-text">
									Min price <small>per night</small>
								</span>
								<input
									type="number"
									className="search-option-input"
								/>
							</div>
							<div className="list-search-option-item">
								<span className="list-search-option-text">
									Max price <small>per night</small>
								</span>
								<input
									type="number"
									className="search-option-input"
								/>
							</div>
							<div className="list-search-option-item">
								<span className="list-search-option-text">
									Adultes 
								</span>
								<input
									type="text"
									className="search-option-input"
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
									className="search-option-input"
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
									// className="search-option-input"
									placeholder={options.rooms}
									min={1}
								/>
							</div>
						</div>
					</div>
					<div className="list-result"></div>
				</div>
			</div>
		</div>
	);
};

export default List;
