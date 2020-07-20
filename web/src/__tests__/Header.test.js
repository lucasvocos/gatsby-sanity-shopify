import React from "react"
import Header from "../components/Header"
import { shallow, mount, render } from "enzyme"

describe("Header", () => {
  it("should match snapshots", () => {
    const component = render(<Header />)
    expect(component).toMatchSnapshot()
  })
  it("should find innerText", () => {
    const component = mount(<Header />)
    const text = component
      .find("h1")
      .first()
      .text()
    expect(text).toEqual("Edit pages/index.js")
  })
  // add your own tests
})
