import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../NavBar';
import { MemoryRouter } from 'react-router-dom';

describe('NavBar', () => {
    test('it renders without crashing', () => {
        render(
            <MemoryRouter>
                <NavBar/>
            </MemoryRouter>
        );
    });

    test('it renders all links and navlinks', () => {
        const { getByText } = render(
            <MemoryRouter>
                <NavBar/>
            </MemoryRouter>
        );

        expect(getByText(/Jobly/)).toBeInTheDocument();
        expect(getByText(/Login/)).toBeInTheDocument();
        expect(getByText(/Sign Up/)).toBeInTheDocument();
        expect(getByText(/Logout/)).toBeInTheDocument();
        expect(getByText(/Companies/)).toBeInTheDocument();
        expect(getByText(/Jobs/)).toBeInTheDocument();
    })
});
