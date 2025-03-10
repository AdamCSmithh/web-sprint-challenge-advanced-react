import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstName = screen.queryByLabelText(/First Name:/i)
    userEvent.type(firstName, "Adam");
    const lastName = screen.queryByLabelText(/Last Name:/i)
    userEvent.type(lastName, "Smith");
    const address = screen.queryByLabelText(/Address:/i)
    userEvent.type(address, "55 9th St");
    const city = screen.queryByLabelText(/City:/i)
    userEvent.type(city, "San Francisco");
    const state = screen.queryByLabelText(/State:/i)
    userEvent.type(state, "California");
    const zip = screen.queryByLabelText(/Zip:/i)
    userEvent.type(zip, "94103");
    const checkoutButton = screen.getByRole('button');
    userEvent.click(checkoutButton);
});
