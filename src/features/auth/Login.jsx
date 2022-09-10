import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';


import { useSelector, useDispatch } from 'react-redux'

import Auth from './auth'
import { LogInUser, LogOutUser} from './auth_slice';

import {GOOGLE} from "../../constants"


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Mental
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LogIn() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const onClickLogin = (provider) =>{

    console.log("on Clikc : ", provider);
    Auth.login(provider)
    .then(user => {
      dispatch(LogInUser(user))
    })
  }

  const onClickLogout = () => {
    Auth.logOut()
      .then(res => {
        dispatch(LogOutUser())
      })
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {/* <Paper elevation = {3} > */}
        <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
              <div> Hello {auth.user && auth.user.displayName}</div>
            </Typography>
            <br></br>


            <Grid row sx = {{m : 1}} >
              <Button variant="outlined" 
                color="error" startIcon={<GoogleIcon />} 
                onClick = {e => onClickLogout("Google")}>
                {"Google     Log Out"}
              </Button>
            </Grid>


            <Grid row sx = {{m : 1}} >
              <Button variant="outlined" 
                color="error" startIcon={<GoogleIcon />} 
                onClick = {e=>onClickLogin(GOOGLE)}>
                {"Google     n"}
              </Button>
            </Grid>
            <Grid row sx = {{m : 1}}>
              <Button variant="outlined" startIcon={<FacebookIcon />}>
                Facebook
              </Button>
            </Grid>
          </Box>

        {/* </Paper> */}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}