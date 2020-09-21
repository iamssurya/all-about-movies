import React from "react";
import Enzyme, { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import PersonCard from "../PersonCard";
import { MemoryRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const props = {
  profile_path: "test/path/",
  name: "name.jpg",
};

describe("<PersonCard /> test cases", () => {
  let PersonCardComponent;
  let WrapperPersonCardComponent;
  let fetchedProps;
  beforeEach(() => {
    PersonCardComponent = shallow(
      <MemoryRouter>
        <PersonCard {...props} />
      </MemoryRouter>
    );
    WrapperPersonCardComponent = toJson(PersonCardComponent);
    fetchedProps = WrapperPersonCardComponent.node.props.children.props;
  });

  it("should render PersonCardComponent", () => {
    expect(PersonCardComponent).toHaveLength(1);
  });

  it("should have correct props", () => {
    expect(fetchedProps).toEqual(props);
  });

  it("should not have empty props", () => {
    expect(fetchedProps).not.toEqual({});
  });
});
