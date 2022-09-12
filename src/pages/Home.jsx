import * as React from 'react';

import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { useSelector, useDispatch } from 'react-redux'

import Auth from '../features/auth/auth'
import { LogOutUser } from '../features/auth/auth_slice';

export default  () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const onClickLogout = () => {
        Auth.logOut()
          .then(res => {
            dispatch(LogOutUser())
          })
      }
    return <h1>
        {auth && auth.user 
        ? <Typography> Hello {auth && auth.user && auth.user.displayName}        
              <Button variant="outlined" 
                color="error" startIcon={<GoogleIcon />} 
                onClick = {e => onClickLogout()}>
                {"Google Log Out"}
              </Button>
         </Typography>
        : <Link href="/login" variant="body2">Login Please</Link>
        }
    </h1>
}