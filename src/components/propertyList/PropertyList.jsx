import './propertyList.css';

const PropertyList = () => {
	return (
        <div className='property-list'>
            <div className="property-list-item">
                <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className='property-list-img'/>
                <div className="property-list-titles">
                    <h1>Hôtels</h1>
                    <h2>433 hotels</h2>
                </div>
            </div>
            <div className="property-list-item">
                <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className='property-list-img'/>
                <div className="property-list-titles">
                    <h1>Appartements</h1>
                    <h2>246 appartements</h2>
                </div>
            </div>
            <div className="property-list-item">
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className='property-list-img'/>
                <div className="property-list-titles">
                    <h1>Resorts</h1>
                    <h2>145 resorts</h2>
                </div>
            </div>
            <div className="property-list-item">
                <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className='property-list-img'/>
                <div className="property-list-titles">
                    <h1>Villas</h1>
                    <h2>175 villas</h2>
                </div>
            </div>
            <div className="property-list-item">
                <img src="https://images.unsplash.com/photo-1635690280190-0eec6bc587fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" className='property-list-img'/>
                <div className="property-list-titles">
                    <h1>Cabanes</h1>
                    <h2>79 cabanes</h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;
