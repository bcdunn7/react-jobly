import React from 'react';
import { render } from '@testing-library/react';
import CompanyCard from '../CompanyCard';
import { MemoryRouter } from 'react-router-dom';

const mockCompany = {
    handle: 'company-handle',
    name: 'Company Name',
    description: 'Company description here.',
    numEmployees: 5,
    logoUrl: undefined,
    jobs: [
        {
            id: 1,
            title: 'Job Title',
            salary: 25000,
            equity: 0.5
        }
    ]
}

test('it renders without crashing', () => {
    render(
        <MemoryRouter>
            <CompanyCard company={mockCompany}/>
        </MemoryRouter>
    );
});
