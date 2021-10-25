import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import { useState } from 'react';
import UserContext from './UserContext';
import { useEffect } from 'react';
import JoblyApi from './api';
import jwt from 'jsonwebtoken';

function App() {

	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);
	const [appliedToIds, setAppliedToIds] = useState(new Set());

	// save token to localStorage and state
	const saveUserToken = (token) => {
		localStorage.setItem('token', token);
		setToken(token);
	}

	// on mount, get token from loaclstorage
	useEffect(() => {
		async function checkLocalStorage() {
			const token = await localStorage.getItem('token');
			setToken(token);
		}
		checkLocalStorage();
	}, [])

	const login = (token) => {
		saveUserToken(token);
	}

	const signup = (token) => {
		saveUserToken(token);
	}

	const logout = () => {
		localStorage.removeItem('token');
		setToken(null);
		setUser(null);
	}

	useEffect(() => {
		async function getUserData() {
			const { username } = jwt.decode(token);
	
			try {
				JoblyApi.token = token;
				const res = await JoblyApi.getUser(username);
				setUser(res.user);
				setAppliedToIds(new Set([...res.user.applications]));
			} catch (e) {
				console.error(e);
			}
		}
		if (token) {
			getUserData();
		}
	}, [token])

	// TODO: user state here
	/** TODO:
	 * 
	 * user state here
	 * 
	 * pass down or maybe react context? user state to login/signup and whatever else will need it
	 * ?jobs because of apps
	 * 
	 * probably write hook for auth to pass to login and signup (or two)
	 * 
	 * if user, display certain nav things, if not display others
	 *
	 *  */ 

	return (
		<div className="App">
			<UserContext.Provider value={{ login, signup, logout, setUser, user, appliedToIds, setAppliedToIds }}>
				<BrowserRouter>
					<NavBar/>
					<div className="App-content-div">
						<Routes/>
					</div>
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	);
}

export default App;
