import { Box, Grid, Paper } from '@mui/material'
import BasicCard from './BasicCard'
import { BasicCardPropsData } from './BasicCardProps'



const AppDasboard = () => {
  return (
    <Box p={5} style={{ height: '58%' }}>
    <Grid container spacing={4}>
     
          {BasicCardPropsData.map((data, index) => (
              <Grid item xs={4} key={index}>
                    <Paper elevation={5} >
                    <BasicCard 
                        theindex={data.theindex}
                        appName={data.appName}
                        appDescription={data.appDescription}
                        appUrl={data.appUrl}
                    />
                  </Paper>
              </Grid>
            ))}

     </Grid>
</Box>
  )
}

export default AppDasboard