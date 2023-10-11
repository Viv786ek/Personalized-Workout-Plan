import React from 'react';
import { Box, Typography,List,ListItem,ListItemText,ListItemIcon } from '@mui/material';
import workOut from '../assets/images/workOut.png';

const ExercisePlanCard = ({ exercise }) => (
  <Box className="exercise-card">
    <img src={exercise.imageLink} alt='https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg' loading="lazy" />
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: '24px', xs: '20px' } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
    <Typography
      ml="21px"
      color="#000"
      sx={{ fontSize: '14px' }}
      mt="11px"
      pb="10px"
    >
      Duration: {exercise.duration}
    </Typography>
    <Typography
      ml="21px"
      color="#000"
      sx={{ fontSize: '14px' }}
      mt="11px"
      pb="10px"
    >
      Description: {exercise.description}
    </Typography>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: '18px' }}
      mt="11px"
      pb="10px"
    >
      Day-wise Plans:
    </Typography>
    <List>
        {exercise.dayWisePlans.map((plan, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <span style={{ color: '#FF2625', fontSize: '20px', marginRight: '8px' }}>•</span>
            </ListItemIcon>
            <ListItemText primary={plan} />
          </ListItem>
        ))}
      </List>
    {/* <ul>
      {exercise.dayWisePlans.map((plan, index) => (
        <li key={index}>{plan}</li>
      ))}
    </ul> */}
  </Box>
);

export default ExercisePlanCard;
