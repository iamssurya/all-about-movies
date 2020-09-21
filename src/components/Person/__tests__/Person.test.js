import React from "react";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Loader from "components/Shared/Loader/Loader";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { personMock } from "mock/person";
import Person from "../Person";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore(personMock);

describe("<Person /> component tests", () => {
  let PersonComponent;
  let WrapperPersonComponent;
  let fetchedProps;
  beforeEach(async () => {
    PersonComponent = await shallow(
      <MemoryRouter>
        <React.Suspense fallback={<Loader />}>
          <Provider store={store}>
            <Person {...personMock} />
          </Provider>
        </React.Suspense>
      </MemoryRouter>
    );
    WrapperPersonComponent = toJson(PersonComponent);
    fetchedProps =
      WrapperPersonComponent.node.props.children.props.children.props.children
        .props;
  });

  it("Should render component", () => {
    expect(PersonComponent).toHaveLength(1);
  });

  it("should have correct props", () => {
    expect(fetchedProps).toEqual(personMock);
  });

  it("should not have empty props", () => {
    expect(fetchedProps).not.toEqual({});
  });
});
