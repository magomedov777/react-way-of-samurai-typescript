import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { StatePropsType } from './components/state';

test('renders learn react link', () => {
  render(<App state={{} as StatePropsType} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
