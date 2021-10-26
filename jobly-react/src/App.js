import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import { useState } from 'react';
import UserContext from './UserContext';
import { useEffect } from 'react';
import JoblyApi from './api';
import jwt from 'jsonwebtoken';
import { CircularProgress } from '@mui/material';

function App() {

	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);
	const [appliedToIds, setAppliedToIds] = useState(new Set());
	const [isLoading, setIsLoading] = useState(true);

	// save token to localStorage and state
	const saveUserToken = (token) => {
		localStorage.setItem('token', token);
		setToken(token);
	}

	// on mount, get token from loaclstorage
	useEffect(() => {
		async function checkLocalStorage() {
			const token = localStorage.getItem('token');
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

	// when token changes, load user data
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
		setIsLoading(false);
	}, [token])

	return (
		<>
			{isLoading
				? <div className="loading-div"><CircularProgress/></div>
				: <div className="App">
					<UserContext.Provider value={{ login, signup, logout, setUser, user, appliedToIds, setAppliedToIds }}>
						<BrowserRouter>
							<NavBar/>
							<div className="App-content-div">
								<Routes/>
							</div>
						</BrowserRouter>
					</UserContext.Provider>
				</div>
			}
		</>
	);
}

export default App;
