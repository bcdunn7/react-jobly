import React from 'react';
import { render } from '@testing-library/react';
import JobCard from '../JobCard';

const mockJob = {
    id: 1,
    title: 'Job Title',
    salary: 25000,
    equity: 0.5
}

test('it renders without crashing', () => {
    render(<JobCard job={mockJob}/>);
});
