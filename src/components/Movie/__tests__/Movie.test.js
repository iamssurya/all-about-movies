import React from "react";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Movie from "../Movie";
import Loader from "components/Shared/Loader/Loader";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { movieMock } from "mock/movie";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({ ...movieMock });

describe("<Movie /> component tests", () => {
  let MovieComponent;
  let WrapperMovieComponent;
  beforeEach(async () => {
    MovieComponent = await shallow(
      <MemoryRouter>
        <React.Suspense fallback={<Loader />}>
          <Provider store={store}>
            <Movie {...movieMock} />
          </Provider>
        </React.Suspense>
      </MemoryRouter>
    );
    WrapperMovieComponent = toJson(MovieComponent);
  });

  it("Should render component", () => {
    expect(MovieComponent).toHaveLength(1);
  });
});
