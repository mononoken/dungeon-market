import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../../../src/routes";

describe("monster index route", () => {
  it("renders correct heading", () => {
    const mockRouter = createMemoryRouter(routes, {
      initialEntries: ["/monsters/"],
    });

    render(<RouterProvider router={mockRouter} />);

    expect(screen.getByRole("heading").textContent).toMatch(/Monsters/i);
  });

  it.skip("renders monsters", () => {
    const mockRouter = createMemoryRouter(routes);

    render(<RouterProvider router={mockRouter} />);

    // expect(screen.getByRole("link", { name: /Shop/i })).toHaveAttribute(
    //   "href",
    //   "/monsters/",
    // );
  });
});
