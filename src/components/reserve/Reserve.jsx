import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch.js";
import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Reserve = ({ setOpenBook, hotelId }) => {
	const [selectedRooms, setSelectedRooms] = useState([]);
	const { data, loading, error } = useFetch(
		`http://localhost:8800/api/hotels/room/${hotelId}`
	);
	const { date } = useContext(SearchContext);
    const navigate = useNavigate()

	const getDatesInRange = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);
		const date = new Date(start.getTime());
		let list = [];
		while (date <= end) {
			list.push(new Date(date).getTime());
			date.setDate(date.getDate() + 1);
		}
		return list;
	};

	const allDates = getDatesInRange(date[0].startDate, date[0].endDate);

	const isAvailable = (roomNumber) => {
		const isFound = roomNumber.unavailableDates.some((date) =>
			allDates.includes(new Date(date).getTime())
		);
		return !isFound;
	};

	const handleSelect = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};
	console.log(selectedRooms);
	const handleClick = async () => {
        try {
            await Promise.all(selectedRooms.map((roomId) => {
                const response = axios.put(`http://localhost:8800/api/rooms/availability/${roomId}`, {date: allDates})
                return response.data
            }))
            setOpenBook(false)
            navigate('/')
        } catch (err) {
            return err
        }
    };

	return (
		<div className="reserve">
			<div className="reserve__container">
				<FontAwesomeIcon
					icon={faCircleXmark}
					className="reserve-close"
					onClick={() => setOpenBook(false)}
				/>
				<span className="reserve-select">Select your rooms</span>
				{data.map((item) => (
					<div className="reserve-item" key={item.title}>
						<div className="reserve-info">
							<div className="reserve-title">{item.title}</div>
							<div className="reserve-desc">{item.desc}</div>
							<div className="reserve-max">
								Mx people: <b>{item.maxPeople}</b>
							</div>
							<div className="reserve-price">{item.price}€</div>
						</div>
						<div className="room">
							<div className="reserve-select-rooms">
								{item.roomNumbers.map((roomNumber, i) => (
									<div key={i} className="room">
										<label>{roomNumber.number}</label>
										<input
											type="checkbox"
											value={roomNumber._id}
											onChange={handleSelect}
											disabled={!isAvailable(roomNumber)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
				<button className="reserve-button" onClick={handleClick}>
					Reserver maintenant !
				</button>
			</div>
		</div>
	);
};

export default Reserve;
