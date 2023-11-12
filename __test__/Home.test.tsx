import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer, FooterText } from "../src/components/Structure";
import * as Card from "../src/components/CardLoading/styles";

describe("Footer test", () => {
  const container = render(<Footer />);

  const id = Footer.styledComponentId;
  const classname = document.getElementsByClassName(id);
  const style = window.getComputedStyle(classname[0]);

  it("Footer to have min-height", () => {
    expect(style.minHeight).toBe("34px");
  });

  it("Footer have to exist", () => {
    expect(container).toBeDefined();
  });

  it("Footer have to render MKS text", () => {
    const container_text = render(<FooterText>MKS sistemas</FooterText>);
    const text = container_text.getByText("MKS sistemas");
    expect(text).toBeDefined();
  });
});

describe("Skeleton test", () => {
  const skeleton = render(<Card.skeletonCard />);
  const id = Card.skeletonCard.styledComponentId;
  const classname = document.getElementsByClassName(id);
  const style = window.getComputedStyle(classname[0]);

  it("Should have rendered", () => {
    expect(skeleton).toBeDefined();
  });
  it("Should have min height style", () => {
    expect(style.minHeight).toBe("285px");
  });
});
