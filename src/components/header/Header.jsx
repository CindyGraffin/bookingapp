import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBed,
	faPlane,
	faCar,
	faTaxi,
	faPerson,
	faDharmachakra,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import fr from "date-fns/locale/fr";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = ({type}) => {
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adults: 1,
		children: 0,
		rooms: 1,
	});

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]:
					operation === "increase"
						? options[name] + 1
						: options[name] - 1,
			};
		});
	};

	return (
		<div className="header">
			<div className={type === "list" ? "header__container list-mode" : "header__container"}>
				<div className="header-list">
					<div className="header-list-item active">
						<FontAwesomeIcon icon={faBed} />
						<span>Hébergements</span>
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
						<FontAwesomeIcon icon={faDharmachakra} />
						<span>Attractions</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Taxis Aéroport</span>
					</div>
				</div>
				{ type !== "list" && 
					<div>
						<h1 className="header-title">
							Réservez le séjour de vos rêves !
						</h1>
						<p className="header-desc">
							Solutions clés en main, récompenses pour vos
							voyages, et mieux encore avec un compte gratuit
							BookingApp.
						</p>
						<button className="header-btn">
							Se connecter / Créer un compte
						</button>
						<div className="header-search">
							<div className="header-search-item">
								<FontAwesomeIcon
									icon={faBed}
									className="header-icon"
								/>
								<input
									type="text"
									placeholder="Où voulez-vous aller ?"
									className="header-search-input"
								/>
							</div>
							<div className="header-search-item">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="header-icon"
								/>
								<span
									onClick={() => setOpenDate(!openDate)}
									className="header-search-text"
								>{`Du ${format(
									date[0].startDate,
									"dd/MM/yyyy"
								)} au ${format(
									date[0].endDate,
									"dd/MM/yyyy"
								)}`}</span>
								{openDate && (
									<DateRange
										locale={fr}
										editableDateInputs={true}
										onChange={(item) =>
											setDate([item.selection])
										}
										moveRangeOnFirstSelection={false}
										ranges={date}
										dateDisplayFormat="d MMM yyyy"
										className="date"
									/>
								)}
							</div>
							<div className="header-search-item">
								<FontAwesomeIcon
									icon={faPerson}
									className="header-icon"
								/>
								<span
									className="header-search-text"
									onClick={() => setOpenOptions(!openOptions)}
								>
									{options.adults} adultes ⸱{" "}
									{options.children} enfants ⸱ {options.rooms}{" "}
									chambre
								</span>
								{openOptions && (
									<div className="options">
										<div className="option-item">
											<span className="option-text">
												Adultes
											</span>
											<div className="option-counter">
												<button
													className="option-counter-btn"
													onClick={() =>
														handleOption(
															"adults",
															"decrease"
														)
													}
													disabled={
														options.adults <= 1
													}
												>
													-
												</button>
												<span className="option-counter-number">
													{options.adults}
												</span>
												<button
													className="option-counter-btn"
													onClick={() =>
														handleOption(
															"adults",
															"increase"
														)
													}
												>
													+
												</button>
											</div>
										</div>
										<div className="option-item">
											<span className="option-text">
												Enfants
											</span>
											<div className="option-counter">
												<button
													className="option-counter-btn"
													onClick={() =>
														handleOption(
															"children",
															"decrease"
														)
													}
													disabled={
														options.children <= 0
													}
												>
													-
												</button>
												<span className="option-counter-number">
													{options.children}
												</span>
												<button
													className="option-counter-btn"
													onClick={() =>
														handleOption(
															"children",
															"increase"
														)
													}
												>
													+
												</button>
											</div>
										</div>
										<div className="option-item">
											<span className="option-text">
												Chambres
											</span>
											<div className="option-counter">
												<button
													className="option-counter-btn"
													onClick={() =>
														handleOption(
															"rooms",
															"decrease"
														)
													}
													disabled={
														options.rooms <= 1
													}
												>
													-
												</button>
												<span className="option-counter-number">
													{options.rooms}
												</span>
												<button
													className="option-counter-btn"
													onClick={() =>
														handleOption(
															"rooms",
															"increase"
														)
													}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="header-search-item">
								<button className="header-btn">
									Rechercher
								</button>
							</div>
						</div>
					</div>
				}
			</div>
		</div>
	);
};

export default Header;
