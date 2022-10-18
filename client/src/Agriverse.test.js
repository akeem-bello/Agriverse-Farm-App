import React from 'react';
import { render, screen } from '@testing-library/react';
import Agriverse from './Agriverse';

test('renders learn react link', () => {
  render(<Agriverse />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
