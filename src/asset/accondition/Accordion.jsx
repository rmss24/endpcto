import './Accordion.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div className='Accordion'>
        <p className='title_Accordion'>FAQ</p>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How did they enter the rating in PCTO?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text_Accordion'>
          The choice made by us is to produce a disciplinary assessment where there is a direct connection with the subjects studied in the high school
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How to do with credits?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text_Accordion'>
          they allow to analyze the question of formative credit, but also to introduce the possible disciplinary credit. The training credit is awarded for the certification of recognized activities or by decision of the board.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What role do school tutors play?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text_Accordion'>
          School tutors have a central role because they plan and cannot limit themselves to checking that the documentation is correct. The design role in this sector also introduces noteworthy innovations in a world like that of the school which has structured its projects very often according to internal lines and which instead must now begin to take seriously the surrounding world.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
