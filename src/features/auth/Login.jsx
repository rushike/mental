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

import { useNavigate } from "react-router-dom";

import { LogInUser, LogOutUser} from './auth_slice';

import {GOOGLE, USER_PASS} from "../../constants"

import {ColoredLine} from '../common'


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
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const onClickLogin = (provider, email = null, password = null) =>{

    Auth.login(provider, email, password)
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
  if (auth && auth.user) {
    navigate("/")
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
            Log in
          </Typography>
          <Box component="form" onSubmit={e=>onClickLogin(USER_PASS)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <ColoredLine color = 'red'/>
          <Typography component="h3" variant="h6" bold>
            OR
          </Typography>
          <Grid container>
            <Grid row xs = {12} sx = {{m : 1}} >
              <Button variant="outlined" 
                style = {{width : "100%"}}
                color="error" startIcon={<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/48px-Google_%22G%22_Logo.svg.png?20210618182606" />} 
                onClick = {e=>onClickLogin(GOOGLE)}>
                <Typography component="h3" variant="h6">Google</Typography>
              </Button>
            </Grid>
          </Grid>
            
        </Box>

        


        <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Grid row sx = {{m : 1}} >
              <Button variant="outlined" 
                color="error" startIcon={<GoogleIcon />} 
                onClick = {e => onClickLogout()}>
                {"Google Log Out"}
              </Button>
            </Grid>
          </Box>

        {/* </Paper> */}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}