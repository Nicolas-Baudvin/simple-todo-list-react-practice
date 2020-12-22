import { shallow } from 'enzyme';
import TaskInput from '.';
import React from 'react';

describe("Input", () => {
    const setState = jest.fn();

    const useStateMock = (initState) => [initState, setState];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render TaskInput Component", () => {
        const wrapper = shallow(<TaskInput />);
        expect(wrapper.find(".form").length).toEqual(1);
    });

    it("should call setState on change event", () => {
        jest.spyOn(React, "useState").mockImplementation(useStateMock);
        const wrapper = shallow(<TaskInput />);
        const input = wrapper.find(".form-input");

        input.simulate("change", { target: { value: "test" } });

        expect(setState).toHaveBeenCalledWith("test");
    });

    it("should call setState on click event", () => {
        jest.spyOn(React, "useState").mockImplementation(useStateMock);
        const wrapper = shallow(<TaskInput />);

        const clickable = wrapper.find(".form-img-container");

        clickable.simulate("click");

        expect(setState).toHaveBeenCalled();
    });
});