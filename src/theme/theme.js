import { createTheme } from "@mui/material/styles";
import { color } from "./color";

let lightTheme = createTheme({
    palette: {
        primary: {
            main: color.primary,
            contrastText: color.white,
            background: color.white,
            text: color.text_dark,
        },
        secondary: {
            main: color.secondary,
            contrastText: color.contrast_Text,
            background: color.background_low,
            text: color.text_light,
        },
    },
});

let darkTheme = createTheme({
    palette: {
        primary : {
            main: color.dark_primary,
            contrastText: color.white,
            background: color.white,
            text: color.contrast_Text
        },
        secondary: {
            main: color.dark_secondary,
            contrastText: color.white,
            background: color.background_low,
            text: color.light_grey
        },
    },
});

export { lightTheme, darkTheme };