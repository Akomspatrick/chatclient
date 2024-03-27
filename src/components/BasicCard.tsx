import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BasicCardProps } from './BasicCardProps';
import { useDispatch, useSelector,  } from 'react-redux';
import { RootState } from '../state/store';
import { setSelectedApp } from '../state/SelectedAppSlice';
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );


export default function BasicCard(data:BasicCardProps) {
  const url = useSelector((state:RootState) => state.selectedApp.selectAppName)
  console.log(url)
  const dispatch = useDispatch()

  function onClickHandler(event: React.MouseEvent<HTMLButtonElement>): void {
   


    dispatch(setSelectedApp({selectedAppUrl:data.appUrl,itemclicked:true,selectAppName:data.appName }))

  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          APPLICATION
        </Typography>
        <Typography variant="h5" component="div">
        {data.appName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          version 4.0
        </Typography>
        <Typography variant="body2">
        {/*  click to explore{data.theindex}
          <br />
           {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button  onClick={onClickHandler}>LAUNCH APP</Button>
      </CardActions>
    </Card>
  );
}