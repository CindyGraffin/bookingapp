import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className="navbar">
			<div className="nav__container">
				<Link
					to="/"
					style={{ color: "inherit", textDecoration: "none" }}
				>
					<span className="logo">BookingApp</span>
				</Link>
				{user ? (
					<>
						<p>{user.username}</p>
						<Link to="/login">
							<button className="nav-button">
								Se déconnecter
							</button>
						</Link>
					</>
				) : (
					<div className="nav-items">
						<button className="nav-button">Créer un compte</button>
						<Link to="/login">
							<button className="nav-button">Se connecter</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
