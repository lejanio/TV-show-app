import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from './components/Main/Main';

describe('<Main />', () => {
  it('should render with initial content', () => {
    render(<Main />);

    expect(screen.getByPlaceholderText('Search shows by title...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('should carry out search with search text', () => {
    render(<Main />);

    fireEvent.change(screen.getByPlaceholderText('Search shows by title...'), {
      target: { value: 'show' },
    });
    fireEvent.click(screen.getByText('Search'));
  });
});
