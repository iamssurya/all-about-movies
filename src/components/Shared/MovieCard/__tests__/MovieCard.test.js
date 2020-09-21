import React from "react";
import Enzyme, { mount } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "../MovieCard";
import { MemoryRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const props = {
  data: {
    id: 1,
    title: "test",
    backdrop_path: "test.png",
    release_date: "01-01-1990",
    vote_count: 421,
  },
};

describe("<MovieCard /> test cases", () => {
  let MovieCardComponent;
  let WrapperMovieCardComponent;
  let fetchedProps;
  beforeEach(() => {
    MovieCardComponent = mount(
      <MemoryRouter>
        <MovieCard {...props} />
      </MemoryRouter>
    );
    WrapperMovieCardComponent = toJson(MovieCardComponent);
    fetchedProps = WrapperMovieCardComponent.node.props.children.props;
  });

  it("should render MovieCardComponent", () => {
    expect(MovieCardComponent).toHaveLength(1);
  });

  it("should have correct props", () => {
    expect(fetchedProps).toEqual(props);
  });

  it("should not have empty props", () => {
    expect(fetchedProps).not.toEqual({});
  });
});
