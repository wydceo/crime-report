import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});