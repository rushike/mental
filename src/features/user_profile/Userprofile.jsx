import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Progress_bar } from './Progress_bar';

export default function Userprofile() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
     <Grid container>
     <Grid item xs={1}>
        </Grid>
    <Grid item xs={7}>
        <Typography style={{fontWeight:700}}>
        User Info
        </Typography>
        </Grid>
    <Grid item xs={4}>
    <Button variant="outlined" style={{width: "100%"}}>Edit<EditIcon fontSize='small'/></Button>
        </Grid>  
    </Grid>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Name
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Brian</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Address</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Pune, India
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Date Of Birth
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            06/01/1998
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Joined</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            01/08/2022
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded onChange={handleChange('panel4')}>
        <AccordionSummary
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Progress</Typography>
          <Progress_bar/>

        </AccordionSummary>

        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
