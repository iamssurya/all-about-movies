import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import DataNotFound from "../DataNotFound";

Enzyme.configure({ adapter: new Adapter() });

describe("<DataNotFound /> component tests", () => {
  let Component;
  let Wrapper;
  beforeEach(() => {
    Component = mount(<DataNotFound />);
    Wrapper = toJson(Component);
  });

  it("Should render component correctly", () => {
    expect(Wrapper).toMatchSnapshot();
  });
});
