import GridBoard from "./GridBoard";

export default {
    title: "Components/GridBoard",
    component: GridBoard,
};

export const CenterNorth = {
    args: {
        placement: "2,2 NORTH",
    },
};

export const BottomLeftSouth = {
    args: {
        placement: "0,0 SOUTH",
    },
};

export const TopRightWest = {
    args: {
        placement: "4,4 WEST",
    },
};

export const InvalidInput = {
    args: {
        placement: "5,5 UP",
    },
};