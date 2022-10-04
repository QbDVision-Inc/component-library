import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import style from "./Button.module.pcss";
import tokens from "../../../../design-tokens.json";

import Button from "./Button";

describe("Button test", () => {
  it("renders successfully with default values", () => {
    render(<Button />);

    const el = screen.getByRole("button");

    expect(el).toBeDefined();
    expect(el.classList.contains(style["button-primary"])).toBe(true);
    expect(el.classList.contains(style["button-large"])).toBe(true);
  });

  it("should not be clickable when it's disabled", () => {
    const mockFunction = vi.fn();

    render(<Button onClick={mockFunction} isDisabled />);

    const el = screen.getByRole("button");

    fireEvent.click(el);

    expect(mockFunction).toBeCalledTimes(0);
  });

  it("should works with props", () => {
    render(<Button isSubmit isFullWidth />);

    const el = screen.getByRole("button");

    expect(el.classList.contains(style["button-fullwidth"])).toBe(true);
    expect(el.getAttribute("type")).toBe("submit");
  });

  it("should show spinner in loading state", () => {
    render(<Button type="secondary" isLoading />);

    const el = screen.getByRole("button");

    expect(el.classList.contains(style["button-loading"])).toBe(true);
    expect(el.querySelector("svg")).toBeDefined();
  });

  it("should show white spinner with primary button only", () => {
    const { rerender } = render(<Button type="primary" isLoading />);

    const svgElement = screen.getByRole("button").querySelector("svg");

    expect(svgElement?.getAttribute("fill")).toBe(
      tokens.colors.basic.gray.white.value
    );

    rerender(<Button type="secondary" isLoading />);

    expect(svgElement?.getAttribute("fill")).toBe(
      tokens.colors.basic.blue.primary.value
    );
  });
});
