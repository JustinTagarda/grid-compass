import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import GridBoard from "./GridBoard";

describe("GridBoard", () => {
    it("shows an error message when placement is invalid", () => {
        render(<GridBoard placement="5,5 UP" />);

        expect(screen.getByRole("alert")).toHaveTextContent(
            /coordinates must be between 0 and 4/i
        );
    });

    it("renders a single marker when placement is valid", () => {
        const { container } = render(<GridBoard placement="2,2 NORTH" />);

        const markers = container.querySelectorAll("svg");
        expect(markers).toHaveLength(1);
    });
});