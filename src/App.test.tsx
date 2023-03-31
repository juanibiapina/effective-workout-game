import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  test("renders counter and buttons", async () => {
    render(<App />);

    expect(screen.getByText(/Counter:/i)).toBeInTheDocument();
    expect(screen.getByText("Increment")).toBeInTheDocument();
    expect(screen.getByText("Decrement")).toBeInTheDocument();
  });

  test("increments counter", async () => {
    render(<App />);

    const incrementButton = screen.getByText("Increment");

    expect(screen.getByText(/Counter:/i)).toHaveTextContent("Counter: 0");

    user.click(incrementButton);

    expect(await screen.findByText(/Counter:/i)).toHaveTextContent("Counter: 1");
  });
});
