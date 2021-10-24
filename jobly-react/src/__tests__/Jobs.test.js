import React from 'react';
import { render } from '@testing-library/react';
import Jobs from '../Jobs';

test('it renders without crashing', () => {
    render(<Jobs/>);
});
