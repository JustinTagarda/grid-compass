import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import NavigationIcon from "@mui/icons-material/Navigation";
import PropTypes from "prop-types";

import { parsePlacement } from "./placementParser";

const GRID_SIZE = 5;
const CELL_SIZE = 64;

function rotationForDirection(direction) {
    switch (direction) {
        case "NORTH":
            return 0;
        case "EAST":
            return 90;
        case "SOUTH":
            return 180;
        case "WEST":
            return 270;
        default:
            return 0;
    }
}

function GridBoard({ placement }) {
    const parsed = parsePlacement(placement);

    const hasError = Boolean(parsed && parsed.error);
    const position = !hasError && parsed ? parsed : null;

    const rows = [];
    for (let rowIndex = 0; rowIndex < GRID_SIZE; rowIndex++) {
        const cells = [];

        for (let colIndex = 0; colIndex < GRID_SIZE; colIndex++) {
            const isMarkerCell =
                position &&
                colIndex === position.x &&
                rowIndex === GRID_SIZE - 1 - position.y;

            cells.push(
                <TableCell
                    key={`cell-${rowIndex}-${colIndex}`}
                    align="center"
                    sx={{
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                        padding: 0,
                        border: "1px solid #ccc",
                    }}
                >
                    {isMarkerCell ? (
                        <NavigationIcon
                            sx={{
                                transform: `rotate(${rotationForDirection(position.direction)}deg)`,
                            }}
                        />
                    ) : null}
                </TableCell>
            );
        }

        rows.push(<TableRow key={`row-${rowIndex}`}>{cells}</TableRow>);
    }

    return (
        <Box>
            {hasError ? (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {parsed.error}
                </Alert>
            ) : null}

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Table
                    sx={{
                        tableLayout: "fixed",
                        width: CELL_SIZE * GRID_SIZE,
                    }}
                >
                    <TableBody>{rows}</TableBody>
                </Table>
            </Box>
        </Box>
    );
}

GridBoard.propTypes = {
    placement: PropTypes.string.isRequired,
};

export default GridBoard;