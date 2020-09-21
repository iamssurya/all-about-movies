import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Banner from "../Banner";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe("<Banner /> component tests", () => {
  const props = {
    background: "test-bg.png",
    title: "title",
    tagline: "tagline",
    overview: "overview",
    releaseDate: "12-12-1990",
    runtime: 123,
  };

  let BannerComponent;
  let WrapperBannerComponent;
  let fetchedProps;
  beforeEach(() => {
    BannerComponent = mount(<Banner {...props} />);
    WrapperBannerComponent = toJson(BannerComponent);
    fetchedProps = WrapperBannerComponent.children[0].props;
  });

  it("Should render component correctly", () => {
    expect(WrapperBannerComponent).toMatchSnapshot();
  });
});
