import "./searchItem.css";
import React from "react";

const SearchItem = () => {
	return (
        <div className="search-item">
            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="search-item-img" />
            <div className="search-item-description">
                <h1 className="search-item-title">Tower Street Hotel</h1>
                <span className="search-item-distance">A 300m du centre</span>
                <span className="search-item-taxi">Taxi à l'aéroport inclus</span>
                <span className="search-item-subtitle">Chambre d'hôtel avec climatisation</span>
                <span className="search-item-features">1 baignoire ⸱ 1 grand lit ⸱ 24m²</span>
                <span className="search-item-cancel">Annulation gratuire</span>
                <span className="search-item-cancel-subtitle">Vous pouvez annuler jusqu'à 24h avant gratuitement, profitez du meilleur prix aujourd'hui !</span>
            </div>
            <div className="search-item-details">
                <div className="search-item-rating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="search-item-details-texts">
                    <span className="search-item-price">230 € </span>
                    <span className="search-item-tax">TVA incluse</span>
                    <button className="search-item-check-btn">Voir les disponibilités</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
