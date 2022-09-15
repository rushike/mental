import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';


function valuetext(value) {
  return `${value}°C`;
}
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
export default function OutCome() {
    const theme = useTheme();
   const lightIconColor =
   theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'; 
   return (
    <Card>
    <CardContent>
      <Typography variant="h5" display="block" style={{fontWeight:700, marginBottom:"10%"}} gutterBottom>
        How positive was the outcome you imagined?
      </Typography>
      <Typography variant="h8" style={{fontWeight:400, marginBottom:"6%"}}>
        Please click/tap bar then drag:
      </Typography>
      <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
          {/* <VolumeDownRounded htmlColor={lightIconColor} /> */}
          <Grid container>
            <Grid item xs={3}>
          <Typography variant="subtitle2" gutterBottom>
            0 (not at all positive)
          </Typography>
          </Grid>
          <Grid item xs={5}>
          <Slider
            aria-label="Volume"
            defaultValue={50}
            getAriaValueText={valuetext}
            step={1}
            marks
            min={0}
            max={100}
            valueLabelDisplay="auto"
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                '&:before': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
          />
          </Grid>
          <Grid item xs={4}>
          <Typography variant="subtitle2" gutterBottom>
            100 (extremely positive)
          </Typography>
          </Grid>
          </Grid>
          {/* <VolumeUpRounded htmlColor={lightIconColor} /> */}
        </Stack>
    </CardContent>
    <Grid container>
    <Grid item xs={2}>
        </Grid>
    <Grid item xs={8} >
        <Button variant="outlined" style={{width: "100%"}}>NEXT</Button>
        </Grid>
    <Grid item xs={2}>
        </Grid>  
    </Grid>          
  </Card>
   
  );
}
