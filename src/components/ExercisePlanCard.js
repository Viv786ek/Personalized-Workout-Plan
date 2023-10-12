import React from 'react';
import { Box, Typography,List,ListItem,ListItemText,ListItemIcon } from '@mui/material';
import banner from '../assets/images/banner.png';

const ExercisePlanCard = ({ exercise }) => (
  <Box className="exercise-card">
    <img src={exercise.imageLink} alt={banner} loading="lazy" />
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: '24px', xs: '20px' } }}
      mt="2px"
      pb="2px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
    <Typography
      ml="21px"
      color="#000"
      sx={{ fontSize: '14px' }}
      mt="2px"
      pb="2px"
    >
      Duration: {exercise.duration}
    </Typography>
    <Typography
      ml="21px"
      color="#000"
      sx={{ fontSize: '14px' }}
      mt="2px"
      pb="2px"
    >
      Description: {exercise.description}
    </Typography>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: '18px' }}
      mt="2px"
      pb="2px"
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
