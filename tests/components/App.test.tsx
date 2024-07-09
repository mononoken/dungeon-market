import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./../../src/components/App.tsx";

describe("App", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/Shopping Cart/i);
  });
});
