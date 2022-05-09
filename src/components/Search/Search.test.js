import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

const onChange = jest.fn();

describe('Search component', function () {
    it('should render', function () {
        render(
            <Search
                value=''
                onChange={onChange}
            >
                Find:
            </Search>
        );
        expect(screen.getByText(/Find/i)).toBeInTheDocument();
    });

    it('should render without children', function () {
        render(
            <Search
                value=''
                onChange={onChange}
            />
        );
        expect(screen.getByText(/search/i)).toBeInTheDocument();
    });

    it('should render without placeholder', function () {
        render(
            <Search
                value=''
                onChange={onChange}
            />
        );
        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
    });

    it('should render with custom placeholder', function () {
        render(
            <Search
                value=''
                onChange={onChange}
                placeholder='super search...'
            />
        );
        expect(screen.getByPlaceholderText(/super search.../i)).toBeInTheDocument();
    });

    it('should call onChange when user types', function () {
        render(
            <Search
                value=''
                onChange={onChange}
            >
                Find:
            </Search>
        );
        userEvent.type(screen.getByRole('textbox'), 'React');
        expect(onChange).toBeCalledTimes(5);
    });

    it('should dynamically add classNames', function () {
        render(
            <Search
                value='abc'
                onChange={onChange}
            />
        );
        expect(screen.getByRole('textbox')).toHaveClass('input');
        expect(screen.getByRole('textbox')).toHaveClass('input filled');
        expect(screen.getByText('Search')).toHaveClass('label');
    });

    it('should match snapshot', function () {
        const search = render(
            <Search
                value=''
                onChange={onChange}
            >
                Find:
            </Search>
        );
        expect(search).toMatchSnapshot();
    });
});