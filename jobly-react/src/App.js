import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';

function App() {
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
