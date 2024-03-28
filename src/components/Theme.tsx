import { createTheme } from "@mui/material";
import { red, grey,blueGrey} from "@mui/material/colors";
const theme = createTheme({
    palette: {
        primary: {
        main: red[500],
        },
        secondary: {
        main: "#f50057",
        },
    },
    components: {
        MuiButton: {
        styleOverrides: {
            root: {
            textTransform: "none",
            
            borderRadius: 8,
            backgroundColor:  red[500],
            color: grey[50],
            '&:hover': {
              backgroundColor: blueGrey[900],
            },
            },
        },
        },
    },
    });
export default theme;
// Path: src/components/Theme.tsx
// Compare this snippet from src/components/NotificationComponent.tsx:
// import React, { useState } from 'react';
// import { Grid, Paper, IconButton, Dialog, Badge } from '@mui/material';

// const StyledButton = styled(Button)(({ theme }) => ({
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     '&:hover': {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   }));