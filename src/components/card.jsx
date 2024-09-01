import * as React from 'react';
import { Box, Grid } from "@mui/material";
import Star from "./images/icon-star.svg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Plus from "./images/icon-plus.svg";
import Minus from "./images/icon-minus.svg";

const CustomExpandIcon = () => {
    return (
      <Box
        sx={{
          ".Mui-expanded & > .collapsIconWrapper": {
            display: "none"
          },
          ".expandIconWrapper": {
            display: "none"
          },
          ".Mui-expanded & > .expandIconWrapper": {
            display: "block"
          }
        }}
      >
        <div className="expandIconWrapper"><img src={Minus} alt='minus' /></div>
        <div className="collapsIconWrapper"><img src={Plus} alt='plus' /></div>
      </Box>
    );
  };

function Card() {
  return (
    <div style={{ 
        width: '100%', 
        height:'100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
   
   <Box

  
 
        sx={{ borderRadius:"20px", justifyContent:"center",
  alignItems:"center",
  
  maxWidth:"40vw",
        backgroundColor:"hsl(0, 0%, 100%)", padding: "2rem"
      }}>
      <main>
      <div class="container">
       <img src={Star} alt='star'/><h1>FAQs</h1>
       </div>
        <Accordion>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
        backgroundColor:"hsl(0, 0%, 100%)",
        fontWeight: 600, '&:hover': {color: "hsl(305, 100%, 31%)"}
      }}
        >
          What is Frontend Mentor, and how will it help me?
        </AccordionSummary>
        <AccordionDetails style={{
        backgroundColor:"hsl(0, 0%, 100%)", color:"hsl(292, 16%, 49%)"
      }}>
        Frontend Mentor offers realistic coding challenges to help developers improve their frontend 
        coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels 
        and ideal for portfolio building.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
        backgroundColor:"hsl(0, 0%, 100%)",
        fontWeight: 600, '&:hover': {color: "hsl(305, 100%, 31%)"}
      }}
        >
          Is Frontend Mentor free? 
        </AccordionSummary>
        <AccordionDetails style={{
        backgroundColor:"hsl(0, 0%, 100%)", color:"hsl(292, 16%, 49%)"
      }}>
        Yes, Frontend Mentor offers both free and premium coding challenges, 
        with the free option providing access to a range of projects suitable for all skill levels.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
        backgroundColor:"hsl(0, 0%, 100%)",
        fontWeight: 600, '&:hover': {color: "hsl(305, 100%, 31%)"}
      }}
        >
          Can I use Frontend Mentor projects in my portfolio?
        </AccordionSummary>
        <AccordionDetails style={{
        backgroundColor:"hsl(0, 0%, 100%)", color:"hsl(292, 16%, 49%)"
      }}>
        Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
          sx={{
        backgroundColor:"hsl(0, 0%, 100%)",
        fontWeight: 600, '&:hover': {color: "hsl(305, 100%, 31%)"}
      }}
        >
          How can I get help if I'm stuck on a Frontend Mentor challenge?
        </AccordionSummary>
        <AccordionDetails style={{
        backgroundColor:"hsl(0, 0%, 100%)", color:"hsl(292, 16%, 49%)"
      }}> 
        The best place to get help is inside Frontend Mentor's Discord community. 
        There's a help channel where you can ask questions and seek support from other community members.
        </AccordionDetails>
      </Accordion>
     </main>
    </Box>
    
    </div>
    
  );
}

export default Card;