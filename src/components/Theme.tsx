import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
const theme = createTheme({
    palette: {
        primary: {
        main: red[500],
        },
        secondary: {
        main: "#f50057",
        },
    },
    });
export default theme;
// Path: src/components/Theme.tsx
// Compare this snippet from src/components/NotificationComponent.tsx:
// import React, { useState } from 'react';
// import { Grid, Paper, IconButton, Dialog, Badge } from '@mui/material';
