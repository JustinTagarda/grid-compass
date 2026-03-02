import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function GridBoard() {
    const size = 5;

    const rows = [];
    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        const cells = [];

        for (let colIndex = 0; colIndex < size; colIndex++) {
            cells.push(
                <TableCell
                    key={`cell-${rowIndex}-${colIndex}`}
                    sx={{
                        width: 64,
                        height: 64,
                        border: "1px solid #ccc",
                    }}
                />
            );
        }

        rows.push(<TableRow key={`row-${rowIndex}`}>{cells}</TableRow>);
    }

    return (
        <Table>
            <TableBody>{rows}</TableBody>
        </Table>
    );
}

export default GridBoard;