import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    test('it renders without crashing', () => {
        render(<App/>);
    });
});

