export const exerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    // params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    // url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    // params: {
    //   id: 'UCE_M8A5yxnLfW0KghEeajjw'
    // },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

// export const fetchWorkoutPlanData = async (body) => {
//   try {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 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',
//         'model': 'gpt-3.5-turbo',
//       },
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }

//     const data = await response.json();
//     return JSON.parse(data?.choices[0]?.message?.content);
//   } catch (error) {
//     console.error('Error generating workout plan:', error);
//     throw error;
//   }
// };

// export const fetchWorkoutPlanData = async (userPreferences) => {
//   try {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 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',
//         'model': 'gpt-3.5-turbo'
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [
//           {
//             role: 'system',
//             content: `My name is Vivek. I am ${userPreferences.age} years old and my weight is ${userPreferences.weight}kg. I want to start exercise of ${userPreferences.fitnessLevel} level. Can you suggest a workout for me in JSON format with the given key: 'Workout Name', 'Duration', 'Image Link', 'Description', and an array of 'Day-wise Plans'.`
//           }
//         ]
//       })
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return JSON.parse(data?.choices[0]?.message?.content);
//   } catch (error) {
//     console.error('Error fetching workout plan:', error);
//     throw error;
//   }
// };

// export const mockWorkoutData = {
//   workoutPlan: [
//     {
//       name: 'Push-ups',
//       duration: '15 minutes',
//       imageLink: 'https://example.com/pushups.jpg',
//       description: 'A classic upper body exercise.',
//       dayWisePlans: [
//         'Day 1: Do 10 reps',
//         'Day 2: Do 12 reps',
//         'Day 3: Rest',
//         'Day 4: Do 15 reps',
//       ],
//     },
//     {
//       name: 'Squats',
//       duration: '20 minutes',
//       imageLink: 'https://example.com/squats.jpg',
//       description: 'Great for working your legs and glutes.',
//       dayWisePlans: [
//         'Day 1: Do 15 reps',
//         'Day 2: Do 20 reps',
//         'Day 3: Rest',
//         'Day 4: Do 25 reps',
//       ],
//     },
//     {
//       name: 'Plank',
//       duration: '10 minutes',
//       imageLink: 'https://example.com/plank.jpg',
//       description: 'Builds core strength and stability.',
//       dayWisePlans: [
//         'Day 1: Hold for 30 seconds',
//         'Day 2: Hold for 45 seconds',
//         'Day 3: Rest',
//         'Day 4: Hold for 60 seconds',
//       ],
//     },
//     {
//       name: 'Dumbbell Curls',
//       duration: '15 minutes',
//       imageLink: 'https://example.com/dumbbellcurls.jpg',
//       description: 'Strengthens your biceps.',
//       dayWisePlans: [
//         'Day 1: Do 12 reps',
//         'Day 2: Do 15 reps',
//         'Day 3: Rest',
//         'Day 4: Do 18 reps',
//       ],
//     },
//     {
//       name: 'Jumping Jacks',
//       duration: '12 minutes',
//       imageLink: 'https://example.com/jumpingjacks.jpg',
//       description: 'A cardio exercise that also works your legs and arms.',
//       dayWisePlans: [
//         'Day 1: Do 20 reps',
//         'Day 2: Do 25 reps',
//         'Day 3: Rest',
//         'Day 4: Do 30 reps',
//       ],
//     },
//     {
//       name: 'Leg Raises',
//       duration: '10 minutes',
//       imageLink: 'https://example.com/legraises.jpg',
//       description: 'Targets your lower abs.',
//       dayWisePlans: [
//         'Day 1: Do 15 reps',
//         'Day 2: Do 20 reps',
//         'Day 3: Rest',
//         'Day 4: Do 25 reps',
//       ],
//     },
//     {
//       name: 'Bicycle Crunches',
//       duration: '12 minutes',
//       imageLink: 'https://example.com/bicyclecrunches.jpg',
//       description: 'Works your abs and obliques.',
//       dayWisePlans: [
//         'Day 1: Do 20 reps',
//         'Day 2: Do 25 reps',
//         'Day 3: Rest',
//         'Day 4: Do 30 reps',
//       ],
//     },
//     {
//       name: 'Mountain Climbers',
//       duration: '15 minutes',
//       imageLink: 'https://example.com/mountainclimbers.jpg',
//       description: 'A full-body workout with a focus on the core.',
//       dayWisePlans: [
//         'Day 1: Do 20 reps',
//         'Day 2: Do 25 reps',
//         'Day 3: Rest',
//         'Day 4: Do 30 reps',
//       ],
//     },
//     {
//       name: 'Push-ups (Diamond)',
//       duration: '15 minutes',
//       imageLink: 'https://example.com/pushups-diamond.jpg',
//       description: 'A variation of push-ups for triceps.',
//       dayWisePlans: [
//         'Day 1: Do 10 reps',
//         'Day 2: Do 12 reps',
//         'Day 3: Rest',
//         'Day 4: Do 15 reps',
//       ],
//     },
//     {
//       name: 'Lunges',
//       duration: '20 minutes',
//       imageLink: 'https://example.com/lunges.jpg',
//       description: 'Strengthens your legs and improves balance.',
//       dayWisePlans: [
//         'Day 1: Do 15 reps per leg',
//         'Day 2: Do 20 reps per leg',
//         'Day 3: Rest',
//         'Day 4: Do 25 reps per leg',
//       ],
//     },
//   ],
// };


export const mockWorkoutData = {
  workoutPlan:[
  {
    name: 'Chest Workout',
    duration: '45 minutes',
    imageLink: 'https://example.com/chest_workout.jpg',
    description: 'A comprehensive chest workout for muscle growth.',
    dayWisePlans: [
      'Warm-up: 10 minutes of light cardio',
      'Squat: 4 sets of 8-10 reps',
      'Deadlift: 3 sets of 8-10 reps',
      'Bench Press: 3 sets of 8-10 reps',
      'Pull-ups/Rows: 3 sets of 8-10 reps',
      'Overhead Press: 3 sets of 8-10 reps',
     
    ],
  },
  {
    name: 'Leg Workout',
    duration: '60 minutes',
    imageLink: 'https://example.com/leg_workout.jpg',
    description: 'Intense leg workout for strength and endurance.',
    dayWisePlans: [
      'Warm-up: 10 minutes of light cardio',
      'Squats: 4 sets of 8-10 reps',
      'Leg Press: 3 sets of 8-10 reps',
      'Lunges: 3 sets of 12-15 reps',
      'Deadlift: 3 sets of 8-10 reps',
      'Calf Raises: 3 sets of 15-20 reps',
    ],
  },
  {
    name: 'Back and Shoulders',
    duration: '50 minutes',
    imageLink: 'https://example.com/back_and_shoulders.jpg',
    description: 'Workout to target the back and shoulder muscles.',
    dayWisePlans: [
      'Warm-up: 10 minutes of light cardio',
      'Pull-ups: 4 sets of 8-10 reps',
      'Bent-over Rows: 3 sets of 8-10 reps',
      'Shoulder Press: 3 sets of 8-10 reps',
      'Lat Pulldowns: 3 sets of 8-10 reps',
      'Shrugs: 3 sets of 10-12 reps',
    ],
  },
  {
    name: 'Core Workout',
    duration: '30 minutes',
    imageLink: 'https://example.com/core_workout.jpg',
    description: 'Strengthen your core muscles with this workout.',
    dayWisePlans: [
      'Warm-up: 10 minutes of light cardio',
      'Planks: 4 sets of 30-60 seconds',
      'Russian Twists: 3 sets of 15-20 reps',
      'Leg Raises: 3 sets of 10-12 reps',
      'Crunches: 3 sets of 15-20 reps',
    ],
  },
]
};
