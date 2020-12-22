import { shallow } from 'enzyme';
import App from '.';
import TaskInput from '../Input';
import MainTitle from '../MainTitle';
import Tasks from '../Tasks';

describe("App", () => {
    const setState = jest.fn();

    const useStateMock = (initState) => [initState, setState];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render App", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".App").length).toEqual(1);
    });

    it("should render MainTitle", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.contains(<MainTitle />)).toEqual(true);
    });

    it("should render TaskInput", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(TaskInput).length).toEqual(1);
    });

    it("should render Tasks", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(Tasks).length).toEqual(1);
    });
});