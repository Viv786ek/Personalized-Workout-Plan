import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      // if (bodyPart === 'all') {
      //   exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      // } else {
      //   exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      // }
      if(bodyPart === 'all'){
      exercisesData = [
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/ua1eZIoSbJ9dfc",
          "id": "0001",
          "name": "3/4 sit-up",
          "target": "abs",
          "secondaryMuscles": [
            "hip flexors",
            "lower back"
          ],
          "instructions": [
            "Lie flat on your back with your knees bent and feet flat on the ground.",
            "Place your hands behind your head with your elbows pointing outwards.",
            "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
            "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/bLgr7Ts44rPbSt",
          "id": "0002",
          "name": "45° side bend",
          "target": "abs",
          "secondaryMuscles": [
            "obliques"
          ],
          "instructions": [
            "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
            "Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.",
            "Pause for a moment at the bottom, then slowly return to the starting position.",
            "Repeat on the other side.",
            "Continue alternating sides for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/L67lasUaXpBFp-",
          "id": "0003",
          "name": "air bike",
          "target": "abs",
          "secondaryMuscles": [
            "hip flexors"
          ],
          "instructions": [
            "Lie flat on your back with your hands placed behind your head.",
            "Lift your legs off the ground and bend your knees at a 90-degree angle.",
            "Bring your right elbow towards your left knee while simultaneously straightening your right leg.",
            "Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.",
            "Continue alternating sides in a pedaling motion for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/9vOARORSIbdeEN",
          "id": "1512",
          "name": "all fours squad stretch",
          "target": "quads",
          "secondaryMuscles": [
            "hamstrings",
            "glutes"
          ],
          "instructions": [
            "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
            "Extend one leg straight back, keeping your knee bent and your foot flexed.",
            "Slowly lower your hips towards the ground, feeling a stretch in your quads.",
            "Hold this position for 20-30 seconds.",
            "Switch legs and repeat the stretch on the other side."
          ]
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/2pnU3SMsTwJvib",
          "id": "0006",
          "name": "alternate heel touchers",
          "target": "abs",
          "secondaryMuscles": [
            "obliques"
          ],
          "instructions": [
            "Lie flat on your back with your knees bent and feet flat on the ground.",
            "Extend your arms straight out to the sides, parallel to the ground.",
            "Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.",
            "Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.",
            "Continue alternating sides for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://v2.exercisedb.io/image/RasGFpnKLIcSVN",
          "id": "0007",
          "name": "alternate lateral pulldown",
          "target": "lats",
          "secondaryMuscles": [
            "biceps",
            "rhomboids"
          ],
          "instructions": [
            "Sit on the cable machine with your back straight and feet flat on the ground.",
            "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
            "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/v5vsg6REaRxgAw",
          "id": "1368",
          "name": "ankle circles",
          "target": "calves",
          "secondaryMuscles": [
            "ankle stabilizers"
          ],
          "instructions": [
            "Sit on the ground with your legs extended in front of you.",
            "Lift one leg off the ground and rotate your ankle in a circular motion.",
            "Perform the desired number of circles in one direction, then switch to the other direction.",
            "Repeat with the other leg."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/s0KOdZjC4V8QL4",
          "id": "3293",
          "name": "archer pull up",
          "target": "lats",
          "secondaryMuscles": [
            "biceps",
            "forearms"
          ],
          "instructions": [
            "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
            "Engage your core and pull your shoulder blades down and back.",
            "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
            "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
            "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
            "Alternate sides with each repetition."
          ]
        },
        {
          "bodyPart": "chest",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/RiDju12DyNKWEr",
          "id": "3294",
          "name": "archer push up",
          "target": "pectorals",
          "secondaryMuscles": [
            "triceps",
            "shoulders",
            "core"
          ],
          "instructions": [
            "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
            "Extend one arm straight out to the side, parallel to the ground.",
            "Lower your body by bending your elbows, keeping your back straight and core engaged.",
            "Push back up to the starting position.",
            "Repeat on the other side, extending the opposite arm out to the side.",
            "Continue alternating sides for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/m-DEY5fVeTFPhK",
          "id": "2355",
          "name": "arm slingers hanging bent knee legs",
          "target": "abs",
          "secondaryMuscles": [
            "shoulders",
            "back"
          ],
          "instructions": [
            "Hang from a pull-up bar with your arms fully extended and your knees bent at a 90-degree angle.",
            "Engage your core and lift your knees towards your chest, bringing them as close to your elbows as possible.",
            "Slowly lower your legs back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        }
      ];
    }
    else{
      exercisesData = [
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "https://v2.exercisedb.io/image/RasGFpnKLIcSVN",
          "id": "0007",
          "name": "alternate lateral pulldown",
          "target": "lats",
          "secondaryMuscles": [
            "biceps",
            "rhomboids"
          ],
          "instructions": [
            "Sit on the cable machine with your back straight and feet flat on the ground.",
            "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
            "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/s0KOdZjC4V8QL4",
          "id": "3293",
          "name": "archer pull up",
          "target": "lats",
          "secondaryMuscles": [
            "biceps",
            "forearms"
          ],
          "instructions": [
            "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
            "Engage your core and pull your shoulder blades down and back.",
            "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
            "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
            "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
            "Alternate sides with each repetition."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://v2.exercisedb.io/image/mxFJQ176m8dIzU",
          "id": "0015",
          "name": "assisted parallel close grip pull-up",
          "target": "lats",
          "secondaryMuscles": [
            "biceps",
            "forearms"
          ],
          "instructions": [
            "Adjust the machine to your desired weight and height.",
            "Place your hands on the parallel bars with a close grip, palms facing each other.",
            "Hang from the bars with your arms fully extended and your feet off the ground.",
            "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.",
            "Continue pulling until your chin is above the bars.",
            "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://v2.exercisedb.io/image/WWR4exXhmtkrhm",
          "id": "0017",
          "name": "assisted pull-up",
          "target": "lats",
          "secondaryMuscles": [
            "biceps",
            "forearms"
          ],
          "instructions": [
            "Adjust the machine to your desired weight and height settings.",
            "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Hang with your arms fully extended and your feet off the ground.",
            "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
            "Continue pulling until your chin is above the handles.",
            "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://v2.exercisedb.io/image/M097NBSgJ4v7PA",
          "id": "1431",
          "name": "assisted standing chin-up",
          "target": "lats",
          "secondaryMuscles": [
            "biceps",
            "forearms"
          ],
          "instructions": [
            "Adjust the machine to your desired assistance level.",
            "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.",
            "Pull your body up by flexing your elbows and driving your elbows down towards your sides.",
            "Continue pulling until your chin is above the bar.",
            "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "leverage machine",
          "gifUrl": "https://v2.exercisedb.io/image/zMtnuUhmFQlOwl",
          "id": "1432",
          "name": "assisted standing pull-up",
          "target": "lats",
          "secondaryMuscles": [
            "biceps",
            "forearms"
          ],
          "instructions": [
            "Adjust the machine to your desired weight and height settings.",
            "Stand facing the machine with your feet shoulder-width apart.",
            "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Engage your lats and biceps, and pull yourself up towards the handles.",
            "Pause for a moment at the top, squeezing your back muscles.",
            "Slowly lower yourself back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "stability ball",
          "gifUrl": "https://v2.exercisedb.io/image/amOXLdUMnw6M6F",
          "id": "1314",
          "name": "back extension on exercise ball",
          "target": "spine",
          "secondaryMuscles": [
            "glutes",
            "hamstrings"
          ],
          "instructions": [
            "Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall or other stable surface.",
            "Position your hands behind your head or crossed over your chest.",
            "Engage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.",
            "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/5cNV5bmdLEpZcG",
          "id": "3297",
          "name": "back lever",
          "target": "upper back",
          "secondaryMuscles": [
            "biceps",
            "forearms",
            "core"
          ],
          "instructions": [
            "Start by hanging from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.",
            "Engage your core and pull your shoulder blades down and back.",
            "Bend your knees and tuck them towards your chest.",
            "Slowly lift your legs up, keeping them straight, until your body is parallel to the ground.",
            "Hold this position for a few seconds, then slowly lower your legs back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/vSpDlGjFjSrxWY",
          "id": "1405",
          "name": "back pec stretch",
          "target": "lats",
          "secondaryMuscles": [
            "shoulders",
            "chest"
          ],
          "instructions": [
            "Stand tall with your feet shoulder-width apart.",
            "Extend your arms straight out in front of you, parallel to the ground.",
            "Cross your arms in front of your body, with your right arm over your left arm.",
            "Interlock your fingers and rotate your palms away from your body.",
            "Slowly raise your arms up and away from your body, feeling a stretch in your back and chest.",
            "Hold the stretch for 15-30 seconds, then release.",
            "Repeat on the opposite side."
          ]
        },
        {
          "bodyPart": "back",
          "equipment": "band",
          "gifUrl": "https://v2.exercisedb.io/image/Xhc1sf-wo4U1MV",
          "id": "0970",
          "name": "band assisted pull-up",
          "target": "lats",
          "secondaryMuscles": [
            "biceps",
            "forearms"
          ],
          "instructions": [
            "Attach the band to a pull-up bar or sturdy anchor point.",
            "Step onto the band and grip the bar with your palms facing away from you, hands slightly wider than shoulder-width apart.",
            "Hang with your arms fully extended, keeping your core engaged and your shoulders down and back.",
            "Pull your body up towards the bar by squeezing your shoulder blades together and driving your elbows down towards your hips.",
            "Continue pulling until your chin is above the bar, then slowly lower yourself back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        }
      ]
    }
      console.log("hiii",exercisesData);

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);
  
  if (!Array.isArray(exercises)) {
    const exercisesArray = [exercises];
    exercises = exercisesArray;
}

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

