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
import { styled } from '@mui/material/styles';




export default function BasicCard(data:BasicCardProps) {
  const url = useSelector((state:RootState) => state.selectedApp.selectAppName)
  const redirectToApp= (url:string) => {
    window.open(url, "_blank");
  }
  const redirectToAppUsingPost= (url:string) => {
    const form = document.createElement('form');
    form.method = 'get';
    form.action = url;
    form.target = '_blank';
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 275,
  backgroundColor: theme.palette.grey[100],
  borderRadius: 15,
  boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
  const redirectToAppUsingGet= (url:string) => {
    const form = document.createElement('form');
    form.method = 'get';
    form.action = url;
    form.target = '_blank';
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  console.log(url)
  const dispatch = useDispatch()

  function onClickHandler(event: React.MouseEvent<HTMLButtonElement>): void {
   
    alert(data.appUrl);
    //window.open(data.appUrl, "_blank");
    redirectToAppUsingPost(data.appUrl)
    dispatch(setSelectedApp({selectedAppUrl:data.appUrl,itemclicked:true,selectAppName:data.appName }))

  }

  return (
<StyledCard>
  <CardContent>
    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
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
    <StyledButton onClick={onClickHandler}>LAUNCH APP</StyledButton>
  </CardActions>
</StyledCard>
  );
}