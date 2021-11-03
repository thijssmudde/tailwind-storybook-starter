import * as React from "react";
// import * as ReactDOM from "react-dom";
// import renderer from "react-test-renderer";
import { render } from "@testing-library/react"; // fireEvent
import "@testing-library/jest-dom/extend-expect";
// import { Button } from '../stories/Button.stories';
import { Typography } from "../src";

describe("Typography", () => {
  it("renders correctly", () => {
    const content = "Heading example";

    const { container } = render(
      <Typography variant="h1">{content}</Typography>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
     <h1
       class="text-h1 font-normal tracking-tight text-black dark:text-white"
     >
       Heading example
     </h1>
    `);
  });

  it("Check if renders correct element (h1)", () => {
    const content = "Heading example";

    const { getByText } = render(
      <Typography variant="h1">{content}</Typography>,
    );

    const textElement = getByText(content);
    expect(textElement.outerHTML).toMatch("h1");
  });

  it("Check if renders correct element (p)", () => {
    const content = "Paragraph example";

    const { getByText } = render(
      <Typography variant="xl">{content}</Typography>,
    );

    const textElement = getByText(content);
    expect(textElement.outerHTML).toMatch("p");
  });

  it("Should have the correct h1 ", () => {
    const content = "Heading example";

    const { getByText } = render(
      <Typography variant="h1">{content}</Typography>,
    );

    const textElement = getByText(content);
    expect(textElement.classList).toContain("text-h1");
  });

  it("Use custom color", () => {
    const content = "Heading example";
    const customColor = "text-primary-600 dark:text-gray-300";

    const { getByText } = render(
      <Typography variant="h1" customColor={customColor}>
        {content}
      </Typography>,
    );

    const textElement = getByText(content);
    expect(textElement.classList).toContain("text-primary-600");
    expect(textElement.classList).toContain("dark:text-gray-300");
  });

  it("Use custom weight", () => {
    const content = "Heading example";

    const { getByText } = render(
      <Typography variant="h1" customWeight="medium">
        {content}
      </Typography>,
    );

    const textElement = getByText(content);
    expect(textElement.classList).toContain("font-medium");
    expect(textElement.classList.contains("font-regular")).toBe(false);
  });
});
