import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import * as util from "./util.js";

// var clicked = 0

// var url = "http://18.188.26.75:8000/api/amounts/visited"

// var pressed = 0


// for (let i=0;i<allUsers.length;i++) {
//     pressed=allUsers[i].pressed+pressed
// }
//console.log(allUsers)
//var name = ''
function sendToDatabase(name, clicked){
  var url = "http://18.188.26.75:8000/api/amounts/visited"
    fetch(url)
			.then((resp) => resp.json())
			.then(function(data){
          let flag = false
            for (let i=0;i<data.length;i++) {
              if (data[i].title==name) {
                let pressed=clicked+data[i].pressed
                console.log("found it",pressed)
                util.updateClicks(name,pressed,data[i].id)
                flag=true
              }
            }
            if (!flag){
            util.sendClicks(name,clicked)
            }
            })
}


const items = [
  {
    icon:"",
    title: 'DA BUTTON',
    description:"look to the side it is DA BUTTON"
  },
  {
    icon:"",
    title: 'Mobile integration',
    description:
      'Mobile view is not working',
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon:"",
    title: 'Number of site visits',
    description:
      'You, me, that is it',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

export default function Features() {
  var url = "http://18.188.26.75:8000/api/amounts/visited"
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  var clicked=0
var name=""
  var [pressBut,setPressBut,name] =React.useState(0)
  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(pressBut);
        if (pressBut === 0) {
          console.log("pressed is not 0");
          let totalPressed = 0;
          for (let i = 0; i < data.length; i++) {
            totalPressed += data[i].pressed;
            console.log(totalPressed);
          }
          setPressBut(totalPressed);
        }
      });
  }, [pressBut]);
  
  const selectedFeature = items[selectedItemIndex];

  
  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Product features
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
             Both Usable and Usable Features
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'primary.light' : '';
                    }
                    return selectedItemIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'none' : '';
                    }
                    return selectedItemIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      
                      
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <center>
      
      <TextField placeholder="name" onChange={(event)=>name=event.target.value}>Name</TextField>
      <Button onClick={()=>{clicked+=1
        console.log(clicked)
      }}>Click as many times as you want submit then reload the page to see total number of clicks.</Button>

      <div>The button has been clicked {pressBut} times</div>
      <Button onClick={()=>{
        console.log(name,clicked)
        sendToDatabase(name,clicked)
        clicked=0

      }}>submit</Button>
      
      </center>
            
          
        </Grid>
      </Grid>
      
    </Container>
  );
}
