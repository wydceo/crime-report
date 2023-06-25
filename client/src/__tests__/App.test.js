import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './../App';

describe('<App />', () => {
  it('Should render app without errors', () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
});