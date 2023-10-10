import React from 'react';
import { Box, Typography } from '@mui/material';
import workOut from '../assets/images/workOut.png';

const ExercisePlanCard = ({ exercise }) => (
  <Box className="exercise-card">
    <img src={exercise.imageLink} alt={workOut} loading="lazy" />
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
    <ul>
      {exercise.dayWisePlans.map((plan, index) => (
        <li key={index}>{plan}</li>
      ))}
    </ul>
  </Box>
);

export default ExercisePlanCard;
