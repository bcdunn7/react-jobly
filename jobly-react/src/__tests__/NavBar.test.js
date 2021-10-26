import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../NavBar';
import { MemoryRouter } from 'react-router-dom';
import UserContext from '../UserContext';


describe('NavBar', () => {

    const user = {
        username: 'testuser',
        firstName: 'testFirstName'
    }

    test('it renders without crashing', () => {
        render(
            <UserContext.Provider value={user}>
                <MemoryRouter>
                    <NavBar/>
                </MemoryRouter>
            </UserContext.Provider>
        );
    });

    test('it renders all links and navlinks for anon', () => {
        const { getByText } = render(
            <UserContext.Provider value={{user:null}}>
                <MemoryRouter>
                    <NavBar/>
                </MemoryRouter>
            </UserContext.Provider>
        );

        expect(getByText(/Jobly/)).toBeInTheDocument();
        expect(getByText(/Login/)).toBeInTheDocument();
        expect(getByText(/Sign Up/)).toBeInTheDocument();
    })
    
    test('it renders all links and navlinks for user', () => {
        const { getByText } = render(
            <UserContext.Provider value={{user}}>
                <MemoryRouter>
                    <NavBar/>
                </MemoryRouter>
            </UserContext.Provider>
        );

        expect(getByText(/Jobly/)).toBeInTheDocument();
        expect(getByText(/Logout/)).toBeInTheDocument();
        expect(getByText(/Companies/)).toBeInTheDocument();
        expect(getByText(/Jobs/)).toBeInTheDocument();
    })
});
