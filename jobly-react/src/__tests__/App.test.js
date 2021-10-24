import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    test('it renders without crashing', () => {
        render(<App/>);
    });

    test('it displays NavBar', () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        )

        // homepage is shown
        expect(getByText(/Welcome/)).toBeInTheDocument();

        // NavBar is visible
        expect(getByText('Jobly')).toBeInTheDocument();
        expect(getByText(/Login/)).toBeInTheDocument();
    })

    test('NavBar Links', () => {
        const { getByText } =  render(
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        )

        // homepage is shown
        expect(getByText(/Welcome/)).toBeInTheDocument();

        // user navigation to login page
        const loginLink = getByText(/Login/);
        userEvent.click(loginLink);

        // login page is shown
        expect(getByText(/Login to Jobly/)).toBeInTheDocument();
    })
});

