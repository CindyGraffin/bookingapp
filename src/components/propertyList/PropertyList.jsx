import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
	const { data, loading, error } = useFetch(
		"http://localhost:8800/api/hotels/countbytype"
	);
	const images = [
		"https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		"https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		"https://images.unsplash.com/photo-1635690280190-0eec6bc587fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
	];
	console.log(data);
	return (
		<div className="property-list">
			{loading ? (
				"Loading please wait"
			) : (
				<>
					{data
						&&
						images.map((img, i) => (
							<div className="property-list-item" key={i}>
								<img
									src={img}
									key={img}
									alt=""
									className="property-list-img"
								/>
								<div className="property-list-titles">
									{/* interogation point to be sure we have the data and the app doesn't crash */}
									<h1>{data[i]?.type}</h1>
									<h2>{data[i]?.count} {data[i]?.type}</h2>
								</div>
							</div>
						))}
				</>
			)}
		</div>
	);
};

export default PropertyList;
