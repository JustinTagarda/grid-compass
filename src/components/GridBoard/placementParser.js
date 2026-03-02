const VALID_DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

function isInteger(value) {
    return Number.isInteger(value);
}

export function parsePlacement(input) {
    if (typeof input !== "string" || input.trim().length === 0) {
        return { error: "Placement must be provided as a string." };
    }

    const trimmed = input.trim();
    const parts = trimmed.split(" ");

    if (parts.length !== 2) {
        return { error: "Placement must follow the format: x,y DIRECTION." };
    }

    const coordinatePart = parts[0];
    const directionPart = parts[1].toUpperCase();

    const coordinateValues = coordinatePart.split(",");

    if (coordinateValues.length !== 2) {
        return { error: "Coordinates must follow the format x,y." };
    }

    const x = Number(coordinateValues[0]);
    const y = Number(coordinateValues[1]);

    if (!isInteger(x) || !isInteger(y)) {
        return { error: "Coordinates must be integers." };
    }

    if (x < 0 || x > 4 || y < 0 || y > 4) {
        return { error: "Coordinates must be between 0 and 4." };
    }

    if (!VALID_DIRECTIONS.includes(directionPart)) {
        return { error: "Direction must be NORTH, EAST, SOUTH, or WEST." };
    }

    return {
        x,
        y,
        direction: directionPart,
    };
}