import React from "react";
import Enzyme, { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import MoviesList from "../MoviesList";
import configureMockStore from "redux-mock-store";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const props = {
  movies: [],
  page: 1,
  isFetching: false,
  total_pages: 10,
  isEmpty: false,
  total_results: 1000,
  selectedMovieList: "test",
};

describe("<MoviesList /> test cases", () => {
  let MovieListComponent;
  let wrapper;
  let fetchedProps;
  beforeEach(() => {
    MovieListComponent = shallow(
      <Provider store={store}>
        <MoviesList {...props} />
      </Provider>
    );
    wrapper = toJson(MovieListComponent);
    fetchedProps = wrapper.node.props.children.props;
  });

  it("should render MovieListComponent", () => {
    expect(MovieListComponent).toHaveLength(1);
  });

  it("should have correct props", () => {
    expect(fetchedProps).toEqual(props);
  });

  it("should not have empty props", () => {
    expect(fetchedProps).not.toEqual({});
  });
});
