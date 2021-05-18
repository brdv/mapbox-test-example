import React from 'react';

import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

import App from 'App';

describe('App:', () => {
  it('renders without crashing', () => {
    render(<App />);

    screen.getByTestId('test');
  });
});
