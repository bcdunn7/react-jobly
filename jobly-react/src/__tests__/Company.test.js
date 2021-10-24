import React from 'react';
import { render } from '@testing-library/react';
import Company from '../Company';
import { MemoryRouter } from 'react-router';

test('it renders without crashing', () => {
    render(
        <MemoryRouter initialEntries={['/companies/company-handle']}>
            <Company/>
        </MemoryRouter>
    );
});
