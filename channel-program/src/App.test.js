import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn ChannelProgram', () => {
  render(<App />);
  const linkElement = screen.getByText(/channel program/i);
  expect(linkElement).toBeInTheDocument();
});
