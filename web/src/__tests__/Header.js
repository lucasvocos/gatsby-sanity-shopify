import React from "react"
import renderer from "react-test-renderer"
import Header from "../components/Header"
import { shallow } from "enzyme"

describe("Header", () => {
  it("matches snapshot", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("should render correctly", () => {
    const component = shallow(<Header />)
    expect(component).toMatchSnapshot()
  })
})
