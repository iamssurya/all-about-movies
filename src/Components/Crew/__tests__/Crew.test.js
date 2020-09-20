import React from "react";
import Crew from "../Crew";
import Enzyme, { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Loader from "components/Shared/Loader/Loader";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  crew: [
    {
      name: "James",
      job: "Director",
    },
    {
      name: "Michael Jackson",
      job: "Dancer",
    },
  ],
};

describe("<Crew /> component tests", () => {
  let WrapperCrewComponent;
  let CrewComponent;
  beforeEach(async () => {
    CrewComponent = await mount(
      <React.Suspense fallback={<Loader />}>
        <Crew {...props} />
      </React.Suspense>
    );
    WrapperCrewComponent = toJson(CrewComponent);
  });

  it("Should render props correctly", () => {
    expect(WrapperCrewComponent.node.props.children.props).toBeDefined();

    expect(WrapperCrewComponent.node.props.children.props.crew).toEqual(
      props.crew
    );

    expect(WrapperCrewComponent.node.props.children.props.crew[0].name).toEqual(
      props.crew[0].name
    );

    expect(
      WrapperCrewComponent.node.props.children.props.crew[0].name
    ).not.toEqual(props.crew[1].name);
  });

  it("Should have crew title", () => {
    expect(CrewComponent.find(".crew-title")).toHaveLength(1);
  });

  it("Should have crew names equal to number of crews", () => {
    expect(CrewComponent.find(".crew-name")).toHaveLength(props.crew.length);
  });

  it("Should have crew jobs equal to number of crews", () => {
    expect(CrewComponent.find(".crew-job")).toHaveLength(props.crew.length);
  });
});
