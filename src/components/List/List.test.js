import { render, screen } from "@testing-library/react";
import List from "./List";

const data = ['html', 'css', 'js'];

describe('List component', function () {
    it('should render', function () {
        render(<List items={data}/>);
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText(/html/)).toBeInTheDocument();
    });

    it('should render without data', function () {
        render(<List />);
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('should match snapshot with list data', function () {
        const list = render(<List items={data}/>);
        expect(list).toMatchSnapshot();
    });

    it('should match snapshot without list data', function () {
        const list = render(<List />);
        expect(list).toMatchSnapshot();
    });
});