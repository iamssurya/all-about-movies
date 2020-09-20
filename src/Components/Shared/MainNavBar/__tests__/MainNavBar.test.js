import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import MainNavbar from "../MainNavBar";
import { MemoryRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("<MainNavBar /> component tests", () => {
  let Component;
  beforeEach(() => {
    Component = mount(
      <MemoryRouter>
        <Provider store={store}>
          <MainNavbar />
        </Provider>
      </MemoryRouter>
    );
  });

  it("Should render component correctly", () => {
    expect(Component).toHaveLength(1);
  });
});
