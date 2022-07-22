import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import {Home, Hotel, List} from './pages/index';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* On définit le premier élément, celui sur lequel on arrive lorsque l'on visite l'appli */}
				<Route path='/' element={<Home/>}/>
				<Route path='/hotels' element={<List/>}/>
				<Route path='/hotels/:id' element={<Hotel/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App;