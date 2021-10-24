import React from 'react';
import { render } from '@testing-library/react';
import Companies from '../Companies';

test('it renders without crashing', () => {
    render(<Companies/>);
});
