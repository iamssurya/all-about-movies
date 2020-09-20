import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Loader from "../Loader";

Enzyme.configure({ adapter: new Adapter() });

describe("<Loader /> component tests", () => {
  let Component;
  let Wrapper;
  beforeEach(() => {
    Component = mount(<Loader />);
    Wrapper = toJson(Component);
  });

  it("Should render component correctly", () => {
    expect(Wrapper).toMatchSnapshot();
  });
});
