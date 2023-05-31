import React from "react";
import { render, screen } from "@testing-library/react";
import Task from ".";

test("renders a new task with name", () => {
  render(
    <Task
      task={{ id: new Date().getTime(), name: "Task Name", status: "done" }}
    />
  );
  const linkElement = screen.getByText(/Task Name/i);
  expect(linkElement).toBeInTheDocument();
});
