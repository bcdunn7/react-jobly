import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
    test('it renders without crashing', () => {
        render(<Home/>);
    });
    
    test('it displays welcome message', () => {
        const { getByText } = render(<Home/>);

        const message = getByText(/Welcome/);
        expect(message).toBeInTheDocument();
    })
})
