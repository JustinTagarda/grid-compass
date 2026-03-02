import { describe, it, expect } from "vitest";
import { parsePlacement } from "./placementParser";

describe("parsePlacement", () => {
    it("parses valid input with uppercase direction", () => {
        const result = parsePlacement("2,2 NORTH");

        expect(result).toEqual({
            x: 2,
            y: 2,
            direction: "NORTH",
        });
    });

    it("normalizes lowercase direction", () => {
        const result = parsePlacement("1,3 south");

        expect(result).toEqual({
            x: 1,
            y: 3,
            direction: "SOUTH",
        });
    });

    it("returns error for out-of-range coordinates", () => {
        const result = parsePlacement("5,5 NORTH");
        expect(result.error).toBeDefined();
    });

    it("returns error for invalid direction", () => {
        const result = parsePlacement("2,2 UP");
        expect(result.error).toBeDefined();
    });

    it("returns error for malformed input", () => {
        const result = parsePlacement("invalid");

        expect(result.error).toBeDefined();
    });
});