import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import MainNavbar from "../MainNavBar";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("<MainNavBar /> component tests", () => {
  let Component;
  let Wrapper;
  beforeEach(() => {
    Component = mount(
      <Provider store={store}>
        <MainNavbar />
      </Provider>
    );
    Wrapper = toJson(Component);
  });

  it("Should render component correctly", () => {
    expect(Wrapper).toMatchSnapshot();
  });
});
