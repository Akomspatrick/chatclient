import { Box, Stack, Paper } from '@mui/material'
import React from 'react'
import BasicBars from './TheCharts/BarChat'
import PieArcLabels from './TheCharts/PieArcLabels'
import SimpleCharts from './TheCharts/SimpleCharts'

const LifeReports = () => {
  return (
    <Box p={4}style={{  height: '35%' }} >            
                
    <Stack direction="row" spacing={3} sx={{ overflowX: 'auto' 
            ,
            '&::-webkit-scrollbar': {
              width: '0.4em'
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
              webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,.1)',
              outline: '1px solid slategrey'
            }
                
            }}>

        <Paper elevation={5} sx={{width:'450px'}}>
            <BasicBars />;
        </Paper>
        <Paper elevation={5} sx={{width:'450px'}}>
        <PieArcLabels/>
        </Paper>
        <Paper elevation={5} sx={{width:'450px'}}>
        <SimpleCharts/>
        </Paper>


 
    </Stack>
      
    </Box> 
  )
}

export default LifeReports