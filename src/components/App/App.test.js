import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render', function () {
    render(<App />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
