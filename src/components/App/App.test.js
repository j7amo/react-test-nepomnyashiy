import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe('App component', () => {
  it('should render', function () {
    render(<App />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/Find course/)).toBeInTheDocument();
  });

  it('should render text when user types in Search box', function () {
    render(<App />);
    expect(screen.queryByDisplayValue(/React/)).not.toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.getByDisplayValue(/React/)).toBeInTheDocument();
  });

  it('should render filtered items when user types in Search box', function () {
    render(<App />);
    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'script');
    expect(screen.queryByText(/Vue/)).not.toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();
  });
});
