import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App';

test('renders App without crashing', () => {
  render(<App />);
});

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});

test("form shows success message on submit with form details", () => {});
