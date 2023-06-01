import React from 'react';
import { render } from "@testing-library/react";
import { create } from "react-test-render";
import App from "./app";

test.skip("renders learn react link", () => {
  const { getByText } =  render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Snapshot of the App", () => {
  it("Should match the snapshot every time is rendered", () => {
    const testInstanceAppSnapshot = create(<App />).toJSON();

    expect(testInstanceAppSnapshot).toMatchSnapshot();
  });
});




// Oryginal 

// import { render, screen } from '@testing-library/react';
// import App from '../App';

// import {create} from "react-test-reder"; 

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });