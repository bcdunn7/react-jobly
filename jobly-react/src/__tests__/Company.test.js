import React from 'react';
import { render, screen } from '@testing-library/react';
import Company from '../Company';
import { MemoryRouter } from 'react-router';

describe('Company', () => {
    const mockCompany = {
        name: 'Company Name',
        description: 'Company Description'
    }   

    const mockCompanyJobs = [
        {
            id: 1,
            title: 'Job Title',
            salary: 1000,
            equity: 0.1
        },
        {
            id: 2,
            title: 'Job2 Title',
            salary: 2000,
            equity: 0.2
        },
        {
            id: 3,
            title: 'Job3 Title',
            salary: 3000,
            equity: 0.3
        }
    ]

    test('it renders without crashing', () => {
        render(
            <MemoryRouter initialEntries={['/companies/company-handle']}>
                <Company company={mockCompany} companyJobs={mockCompanyJobs}/>
            </MemoryRouter>
        );
    });
})

