import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../../src/components/App.tsx";

describe("App", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/Dungeon Market/i);
  });

  it("renders link to shopping page", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: /Shop/i })).toBeInTheDocument();
    // expect(screen.getByRole("link", { name: /Shop/i })).toHaveAttribute(
    //   "href",
    //   "https://www.test.com/",
    // );
  });
});
