import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './../../App';

describe('<App />', () => {
  it('Should render header', () => {
    render(<App />);
    expect(screen.getByText('Crime Report Accordion')).toBeInTheDocument();
  });
});