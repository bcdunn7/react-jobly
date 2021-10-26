import React from 'react';
import { render } from '@testing-library/react';
import JobCard from '../JobCard';
import UserContext from '../UserContext';
import userEvent from '@testing-library/user-event'


describe('JobCard', () => {

    const mockJob = {
        id: 1,
        title: 'Job Title',
        salary: 25000,
        equity: 0.5
    }

    const mockJobAppliedTo = {
        id: 5,
        title: 'Job Title',
        salary: 13000,
        equity: 0.5
    }

    const mockJobNoSalary = {
        id: 1,
        title: 'Job Title',
        equity: 0.5
    }

    const mockJobNoEquity = {
        id: 1,
        title: 'Job Title',
        salary: 25000
    }
    
    const mockJobNoSalaryNoEquity = {
        id: 1,
        title: 'Job Title'
    }
    
    const user = {
        username: 'testuser',
        firstName: 'testFirstName'
    }

    let appliedToIds = new Set([5,6,7])

    const setAppliedToIds = () => {
        console.log('Mock applied to function')
    }

    test('it renders without crashing', () => {
        render(
            <UserContext.Provider value={{
                user,
                appliedToIds,
                setAppliedToIds
            }} >
                <JobCard job={mockJob}/>
            </UserContext.Provider>
        );
    });

    test('it disables apply button if already applied to', () => {
        const { getByText } = render(
            <UserContext.Provider value={{
                user,
                appliedToIds,
                setAppliedToIds
            }} >
                <JobCard job={mockJobAppliedTo}/>
            </UserContext.Provider>
        )

        // applied text is only shown if already applied to
        expect(getByText(/Applied/));
    })

    test('it shows salary and equity', () => {
        const { getByText } = render(
            <UserContext.Provider value={{
                user,
                appliedToIds,
                setAppliedToIds
            }} >
                <JobCard job={mockJob}/>
            </UserContext.Provider>
        )

        expect(getByText(/Salary/)).toBeInTheDocument();
        expect(getByText(/Equity/)).toBeInTheDocument();
    })

    test('it shows salary and equity only when available: no salary', () => {
        const { queryByText } = render(
            <UserContext.Provider value={{
                user,
                appliedToIds,
                setAppliedToIds
            }} >
                <JobCard job={mockJobNoSalary}/>
            </UserContext.Provider>
        )

        expect(queryByText(/Salary/)).not.toBeInTheDocument();
        expect(queryByText(/Equity/)).toBeInTheDocument();
    })

    test('it shows salary and equity only when available: no equity', () => {
        const { queryByText } = render(
            <UserContext.Provider value={{
                user,
                appliedToIds,
                setAppliedToIds
            }} >
                <JobCard job={mockJobNoEquity}/>
            </UserContext.Provider>
        )

        expect(queryByText(/Salary/)).toBeInTheDocument();
        expect(queryByText(/Equity/)).not.toBeInTheDocument();
    })

    test('it shows salary and equity when available: no salary or equity', () => {
        const { queryByText } = render(
            <UserContext.Provider value={{
                user,
                appliedToIds,
                setAppliedToIds
            }} >
                <JobCard job={mockJobNoSalaryNoEquity}/>
            </UserContext.Provider>
        )

        expect(queryByText(/Salary/)).not.toBeInTheDocument();
        expect(queryByText(/Equity/)).not.toBeInTheDocument();
    })


})


