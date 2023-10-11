// import React, { useEffect, useState } from 'react';
// import { Box, Button, Stack, TextField, Typography } from '@mui/material';
// import { exerciseOptions, fetchData } from '../utils/fetchData';
// import HorizontalScrollbar from './HorizontalScrollbar';

// const ExercisePlan = ({ setExercises, bodyPart, setBodyPart }) => {
//   const [search, setSearch] = useState('');
//   const [bodyParts, setBodyParts] = useState([]);

//   useEffect(() => {
//     const fetchExercisesData = async () => {
//       const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

//       setBodyParts(['all', ...bodyPartsData]);
//     };

//     //Immediately call the function ASAP when the app load
//     fetchExercisesData();
//   }, []);

//   const handleSearch = async () => {
//     // if (search) {
//     //   const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
//     //   const searchedExercises = exercisesData.filter(
//     //     (exercise) => exercise.name.toLowerCase().includes(search)
//     //            || exercise.target.toLowerCase().includes(search)
//     //            || exercise.equipment.toLowerCase().includes(search)
//     //            || exercise.bodyPart.toLowerCase().includes(search),
//     //   );
  
//     //   window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

//     //   //Reset the search 
//     //   setSearch('');
//     //   //Set the exercises
//     //   setExercises(searchedExercises);
//     // }
//   };

//   return (
//     <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
//       <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
//         Get Your Exercises Plan 
//       </Typography>
//       <Box position="relative" mb="72px">
//         <TextField
//           height="76px"
//           value={search}
//           sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, mb: { lg: '10px', xs: '5px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
//           onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           placeholder="Search Exercises"
//           type="text"
//         />
//         <TextField
//           height="76px"
//           value={search}
//           sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, mb: { lg: '10px', xs: '5px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
//           onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           placeholder="Search Exercises"
//           type="text"
//         />
//         <TextField
//           height="76px"
//           value={search}
//           sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
//           onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           placeholder="Search Exercises"
//           type="text"
//         />
//         {/* <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
//         onClick={handleSearch}
//         >
//           Search
//         </Button> */}
//       </Box>
//       {/* <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
//         <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
//       </Box> */}
//     </Stack>
//   );
// };

// export default ExercisePlan


import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  Checkbox,
} from '@mui/material';
import { exerciseOptions, fetchData, fetchWorkoutPlanData, mockWorkoutData} from '../utils/fetchData';
import ExercisePlanCard from './ExercisePlanCard';


const ExercisePlan = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [targetMuscleGroups, setTargetMuscleGroups] = useState('');
  const [workoutDuration, setWorkoutDuration] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [generalWorkoutPlan, setGeneralWorkoutPlan] = useState(false);
  const [generatedWorkout, setGeneratedWorkout] = useState([]);


  // useEffect(() => {
  //   // Fetch exercise data and populate the options
  //   const fetchExercisesData = async () => {
  //     const bodyPartsData = await fetchData(
  //       'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  //       exerciseOptions
  //     );

  //     setTargetMuscleGroups(['all', ...bodyPartsData]);
  //   };

  //   fetchExercisesData();
  // }, []);

  const handleExerciseSelection = (exercise) => {
    setSelectedExercises((prevSelectedExercises) => {
      if (prevSelectedExercises.includes(exercise)) {
        return prevSelectedExercises.filter((ex) => ex !== exercise);
      } else {
        return [...prevSelectedExercises, exercise];
      }
    });
  };


  const handleGenerateWorkout = async () => {
    // Prepare user preferences and goals
    const userPreferences = {
      age,
      gender,
      fitnessLevel,
      targetMuscleGroups,
      workoutDuration,
      selectedExercises,
      generalWorkoutPlan,
    };

    try {
      // Make an API request to OpenAI to generate workout recommendations
      const generatedWorkoutPlan = mockWorkoutData.workoutPlan;
  
      // Handle the response and extract the workout plan details
      // const data = await response.json();
      
      // Handle the response and extract the workout plan details
      // const generatedWorkoutPlan = data.workoutPlan;
  
      // Set the generated workout plan in the state
      setGeneratedWorkout(generatedWorkoutPlan);
    } catch (error) {
        // Handle other errors
        console.error('Error generating workout plan:', error);
      
    }
  };

  return (
    <Stack id="exercisesPlan" alignItems="center" 
    mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} 
      sx={{ fontSize: { lg: '44px', xs: '30px' } }} 
      mb="49px" textAlign="center">
        Get Your Personalized Workout
      </Typography>
      <Box position="relative" mb="72px">
        <form>
          <Grid container spacing={2}>
            {/* Input fields for user preferences */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Age</InputLabel>
                <Input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type="number"
                  inputProps={{
                    style: {
                      fontWeight: '700',
                      border: 'none',
                      borderRadius: '4px',
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  inputProps={{
                    style: {
                      fontWeight: '700',
                      border: 'none',
                      borderRadius: '4px',
                    },
                  }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Fitness Level</InputLabel>
                {/* Add fitness level input component */}
                <Input
                  value={fitnessLevel}
                  onChange={(e) => setFitnessLevel(e.target.value)}
                  inputProps={{
                    style: {
                      fontWeight: '700',
                      border: 'none',
                      borderRadius: '4px',
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Target Muscle Groups</InputLabel>
                <Input
                  value={targetMuscleGroups}
                  onChange={(e) => setTargetMuscleGroups(e.target.value)}
                  inputProps={{
                    style: {
                      fontWeight: '700',
                      border: 'none',
                      borderRadius: '4px',
                    },
                  }}
                />
              </FormControl>
                </Grid>
            {/* <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Workout Duration</InputLabel>
                <Input
                  value={workoutDuration}
                  onChange={(e) => setWorkoutDuration(e.target.value)}
                  inputProps={{
                    style: {
                      fontWeight: '700',
                      border: 'none',
                      borderRadius: '4px',
                    },
                  }}
                />
              </FormControl>
            </Grid>  */}
            {/* Exercise selection */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={generalWorkoutPlan}
                    onChange={() =>
                      setGeneralWorkoutPlan(!generalWorkoutPlan)
                    }
                  />
                }
                label="General Workout Plan"
              />
            </Grid>
            {/* Add checkboxes for specific exercises */}
            {/* <Grid item xs={12}>
              <Typography variant="h6">Select Exercises:</Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedExercises.includes("push-ups")}
                      onChange={() => handleExerciseSelection("push-ups")}
                      style={{ fontWeight: '700' }} // Apply custom style
                    />
                  }
                  label="Push-ups"
                />
                {/* Add more exercise options here 
              </FormGroup>
            </Grid> */}
          </Grid>
          <Button variant="contained" onClick={handleGenerateWorkout}
            sx={{
              backgroundColor: '#FF2625',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '173px', xs: '80px' },
              height: '56px',
              fontSize: { lg: '20px', xs: '14px' },
            }}
          >
            Plan
          </Button>
        </form>

        {/* Display the generated workout plan */}
        
          <Box  sx={{ mt: { lg: '109px' } }} 
    mt="50px" p="20px">
          <Typography variant="h4" fontWeight="bold" 
      sx={{ fontSize: { lg: '44px', xs: '30px' } }} 
      mb="46px">
            Generated Workout Plan:</Typography>
          {generatedWorkout.length > 0 && (
            <Stack direction="row" 
            sx={{ gap: { lg: '107px', xs: '50px' } }} 
            flexWrap="wrap" justifyContent="center">
              {generatedWorkout.map((exercise, index) => (
                <ExercisePlanCard key={index} 
                exercise={exercise} />
              ))}
            </Stack>
          )}
        </Box>
      </Box>
    </Stack>
  );
};

export default ExercisePlan;


