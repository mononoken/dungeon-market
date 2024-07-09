import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../../src/routes.tsx";

describe("root route", () => {
  it("renders correct heading", () => {
    const mockRouter = createMemoryRouter(routes);

    render(<RouterProvider router={mockRouter} />);

    expect(screen.getByRole("heading").textContent).toMatch(/Dungeon Market/i);
  });

  it("renders link to monsters index route", () => {
    const mockRouter = createMemoryRouter(routes);

    render(<RouterProvider router={mockRouter} />);

    expect(screen.getByRole("link", { name: /Shop/i })).toHaveAttribute(
      "href",
      "/monsters/",
    );
  });
});
