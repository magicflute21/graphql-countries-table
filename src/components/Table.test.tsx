import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

const mockData = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'MX', name: 'Mexico' },
];

test('filters table based on filterValue', () => {
  const { rerender } = render(<Table countries={mockData} filterValue="US" />);

  expect(screen.getByText('United States')).toBeInTheDocument();
  expect(screen.queryByText('Canada')).not.toBeInTheDocument();
  expect(screen.queryByText('Mexico')).not.toBeInTheDocument();

  rerender(<Table countries={mockData} filterValue="ca" />);

  expect(screen.getByText('Canada')).toBeInTheDocument();
  expect(screen.queryByText('United States')).not.toBeInTheDocument();
  expect(screen.queryByText('Mexico')).not.toBeInTheDocument();

  rerender(<Table countries={mockData} filterValue="" />);

  expect(screen.getByText('United States')).toBeInTheDocument();
  expect(screen.getByText('Canada')).toBeInTheDocument();
  expect(screen.getByText('Mexico')).toBeInTheDocument();
});