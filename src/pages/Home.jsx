import * as React from 'react';

import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux'

import Auth from '../features/auth/auth'
import { LogOutUser } from '../features/auth/auth_slice';
import { RandomQuoteCard } from '../features/quote/QuoteCard';


const theme = createTheme();

const Greet = () =>{
  var myDate = new Date();
  var hrs = myDate.getHours();
  var greet;
  if (hrs < 12)
    greet = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
  else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';
  return greet;
}

const AuthHome = () =>{
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const onClickLogout = () => {
    Auth.logOut()
      .then(res => {
        dispatch(LogOutUser())
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid row>
          <Grid item xs = {12}>
            <RandomQuoteCard></RandomQuoteCard>
          </Grid>
        </Grid>
        <Grid row sx = {{m : 2}}>
          <Grid item xs = {12}>
            <Typography variant="h3" gutterBottom>
              Hello <span style = {{fontWeight : "700"}}>{auth.user.displayName}</span>
            </Typography>
            <Typography variant="h4" style = {{fontStyle : "italic"}} gutterBottom>
              <Greet/>
            </Typography>
          </Grid>
        </Grid>
        <Button variant="outlined" 
                color="error" startIcon={<GoogleIcon />} 
                onClick = {e => onClickLogout()}>
                {"Log Out"}
        </Button>
      </Container>
      
    </ThemeProvider>
  )
}

export default  () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    return <h1>
        {auth && auth.user 
        ? <AuthHome/>
        : <Link href="/login" variant="body2">Login Please</Link>
        }
    </h1>
}