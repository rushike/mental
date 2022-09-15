import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Endpage() {
  return (
    <Card sx={{ minWidth: 275 }}>
        <CardMedia
        component="img"
        image="https://www.commercialriskonline.com/wp-content/uploads/2021/10/Cyber-deal_shutterstock_1290500581.jpg"
        alt="Simplifier"
      />
      <CardContent>
        <Typography sx={{ fontSize:"25px" }} gutterBottom textAlign='center'>
          <b>Well done on completing your 1st assignment!</b>
        </Typography>
        </CardContent>
      <CardActions>
      <Grid container>
    <Grid item xs={3}>
        </Grid>
    <Grid item xs={6} >
        <Button variant="outlined" style={{width: "100%", marginBottom:"20%"}}><b>Contact Us</b></Button>
        </Grid>
    <Grid item xs={3}>
        </Grid>  
    <Grid item xs={3}>
        </Grid>
    <Grid item xs={6} >
        <Button variant="outlined" style={{width: "100%"}}><b>Log Out</b></Button>
        </Grid>
    <Grid item xs={3}>
        </Grid>  
        </Grid>   
      </CardActions>
    </Card>
  );
}
