// __tests__/PhotoList.test.js
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PhotoList from "../";

afterEach(cleanup);

describe("PhotoList is rendering", () => {
  it("renders test 1", () => {
    render(<PhotoList />);
  });

  it("renders test 2", () => {
    const { asFragment } = render(<PhotoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
