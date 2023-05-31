import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

describe("Test App component", () => {
  test("renders App component with title", () => {
    render(<App />);
    const linkElement = screen.getByText(/TODO list APP/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders App component with default empty state for tasks list", () => {
    render(<App />);
    const linkElement = screen.getByText(/Not tasks to show/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders App component with the 'Add task' button", () => {
    render(<App />);
    const button = screen.getByTestId("add-task-btn");
    expect(button).toBeInTheDocument();
  });
});
