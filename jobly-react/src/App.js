import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';

function App() {

	// TODO: user state here
	/** TODO:
	 * 
	 * user state here
	 * 
	 * pass down or maybe react context? user state to login/signup and whatever else will need it
	 * ?jobs because of apps
	 * 
	 * if user, display certain nav things, if not display others
	 *
	 *  */ 

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar/>
				<div className="App-content-div">
					<Routes/>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
