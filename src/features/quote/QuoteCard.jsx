import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper  from '@mui/material/Paper';

import sample from "lodash/sample"

import quotes from "./quotes.json"

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export  function QuoteCard({quote, author}) {
  return (
    <Paper elevation = {2} sx={{ minWidth: 275 }} >
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Quote of the Day
            </Typography>
            <Typography variant="h5" component="div">
                {quote}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {author}
            </Typography>
            {/* <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography> */}
        </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions> */}
    </Paper>
  );
}

export const RandomQuoteCard = () => {
    // const quote = "Life has got all those twists and turns. You've got to hold on tight and off you go"
    // const author = "Nicole Kidman"
    const {quote, author} = sample(quotes)
    return <QuoteCard quote = {quote} author = {author}/>
}