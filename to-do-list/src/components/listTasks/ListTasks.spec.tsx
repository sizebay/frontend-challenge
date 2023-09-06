import { render } from "@testing-library/react";
import ListTasks from '../listTasks/index'


describe('listTasks', ()=> {

    test('should render the children prop', () => {
        const children = <div>Child Component</div>;
        const { getByText } = render(<ListTasks>{children}</ListTasks>);
    
    
        expect(getByText('Child Component')).toBeInTheDocument();
    });
})