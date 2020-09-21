import React from "react";
import CastAndCrew from "../CastAndCrew";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Loader from "components/Shared/Loader/Loader";
import toJson from "enzyme-to-json";
import { MemoryRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  cast: [
    {
      name: "Michael Jackson",
    },
  ],
  crew: [
    {
      name: "Michael Jackson",
    },
  ],
};

describe("<CastAndCrew /> component tests", () => {
  let CastAndCrewComponent;
  let WrappedCastAndCrewComponent;
  beforeEach(async () => {
    CastAndCrewComponent = await mount(
      <MemoryRouter>
        <React.Suspense fallback={<Loader />}>
          <CastAndCrew {...props} />
        </React.Suspense>
      </MemoryRouter>
    );

    WrappedCastAndCrewComponent = toJson(CastAndCrewComponent);
  });

  it("Should render props correctly", () => {
    expect(WrappedCastAndCrewComponent.node.props).not.toBeNull();
    expect(
      WrappedCastAndCrewComponent.node.props.children.props.children.props
        .cast[0].name
    ).toEqual(props.cast[0].name);

    expect(
      WrappedCastAndCrewComponent.node.props.children.props.children.props
        .cast[0].name
    ).not.toEqual("falsyname");
  });

  it("Should have cast title", () => {
    expect(CastAndCrewComponent.find(".cast-title")).toHaveLength(1);
  });
});
