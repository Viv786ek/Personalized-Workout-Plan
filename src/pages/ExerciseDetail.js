import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = [
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
        }
      ];
      // await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = [{
        "contents": [
          {
            "video": {
              "channelId": "UC5NDs9I26-lRf-YfKRw0fEw",
              "channelName": "Doctor Tristan Peh",
              "description": "Doctor Tristan Peh - Dentist 3 million followers on my TikTok ♪ Singapore Dentist with 19 years of clinical experience!",
              "lengthText": "0:08",
              "publishedTimeText": "11 months ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/U1TzWWXwqbI/hq720_2.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAAlAADIQj0AgKJDeAHwAQH4Ac4FgAKACooCDAgAEAEYSiBHKGUwDw==&rs=AOn4CLD0yAdpEjwaRefc_O0OvZajNnGiGg",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/U1TzWWXwqbI/hq720_2.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGADwAQH4Ac4FgAKACooCDAgAEAEYSiBHKGUwDw==&rs=AOn4CLDkEs-Lia711dCRzb7UpYX38-Xo-g",
                  "width": 720
                }
              ],
              "title": "ASMR | Do you love Hello Kitty? Do you love bubble gum? #DoctorTristanPeh #HelloKitty #BubbleGum",
              "videoId": "U1TzWWXwqbI",
              "viewCountText": "97,785,122 views"
            }
          },
          {
            "video": {
              "channelId": "UCUDVBtnOQi4c7E8jebpjc9Q",
              "channelName": "Oasis",
              "description": "Directed by Lauren Hutchinson Subscribe Here: Youtube: ...",
              "lengthText": "3:24",
              "publishedTimeText": "7 years ago",
              "thumbnails": [
                {
                  "height": 270,
                  "url": "https://i.ytimg.com/vi/7HF1Sfos3v4/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDtafAzUWP26P5ZkeioH4yI9g38Dw",
                  "width": 480
                }
              ],
              "title": "Oasis - Hello (Official Lyric Video)",
              "videoId": "7HF1Sfos3v4",
              "viewCountText": "4,102,809 views"
            }
          },
          {
            "video": {
              "channelId": "UCfM3zsQsOnfWNUppiycmBuw",
              "channelName": "EminemMusic",
              "description": "Provided to YouTube by Universal Music Group ",
              "lengthText": "4:09",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/k9STycYUCfs/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLANXPk5rLY74PzpQqoB0qKdILquzg",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/k9STycYUCfs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDaTOS6OTy8piu3b_4-4Xxax5NfBw",
                  "width": 720
                }
              ],
              "title": "Hello",
              "videoId": "k9STycYUCfs",
              "viewCountText": "5,030,885 views"
            }
          },
          {
            "video": {
              "channelId": "UCIgAzgbkh2E1CE5qFZa2xMg",
              "channelName": "Bluerose Skansen",
              "description": "No copyright infringement is intended. All credits go to the rightful owners. (Used under fair use policy) Should there be any issues ...",
              "lengthText": "4:07",
              "publishedTimeText": "3 years ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/Axx9IMdL4jc/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCjxA0aYUZD57YKk5-SjXUH5wgn5Q",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/Axx9IMdL4jc/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDfVZZdxxy4QVaZs7xgyn_587s3og",
                  "width": 720
                }
              ],
              "title": "HELLO -  LIONEL RICHIE lyrics (HD)",
              "videoId": "Axx9IMdL4jc",
              "viewCountText": "6,966,711 views"
            }
          },
          {
            "video": {
              "channelId": "UCwwW33Kn3mr48ZLGQ4wdUdQ",
              "channelName": "Adele - Topic",
              "description": "2015 XL Recordings Ltd Released on: 2015-11-20 #Adele #Adele25.",
              "lengthText": "4:56",
              "publishedTimeText": "1 year ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/T1tl66trXTQ/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA1OB4fBfTvKVwiTs70a9kdjmHcNg",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/T1tl66trXTQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDUvg0_lHvWcdPoj05TzltEGFRqJg",
                  "width": 720
                }
              ],
              "title": "Adele - Hello",
              "videoId": "T1tl66trXTQ",
              "viewCountText": "772,716 views"
            }
          },
          {
            "video": {
              "channelId": "UC6gVx_vALsYT-z_u1djJbBQ",
              "channelName": "BETER BÖCÜK",
              "lengthText": "1:01",
              "publishedTimeText": "3 months ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/2_eIN4GU6nc/hq720_2.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAAlAADIQj0AgKJDeAHwAQH4AbYIgAKAD4oCDAgAEAEYRyBUKGUwDw==&rs=AOn4CLC4-1GipiZxi0wX1dq0Onzp8f_UQA",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/2_eIN4GU6nc/hq720_2.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGADwAQH4AbYIgAKAD4oCDAgAEAEYRyBUKGUwDw==&rs=AOn4CLAjLoNyOI86dYFod1I9bIfJpXsh9A",
                  "width": 720
                }
              ],
              "title": "Poor Kid and Hello Neighbor {part3} 😱👻❤️ #shorts",
              "videoId": "2_eIN4GU6nc",
              "viewCountText": "120,202,298 views"
            }
          },
          {
            "video": {
              "channelId": "UCQ-3TNHShbzzthkVwNN0BVw",
              "channelName": "Koala Vibes",
              "description": "Lyrics ⬇️ [Chorus] I could stick around and get along with you ",
              "lengthText": "3:12",
              "publishedTimeText": "2 years ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/fn3ldZ5xSZI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAn9n6mqFTbfMFzCJrgygDxhmvU-Q",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/fn3ldZ5xSZI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDxQgQwir-9lxPP-2r4v1qNUhIIGQ",
                  "width": 720
                }
              ],
              "title": "Martin Solveig & Dragonette - Hello (Lyrics) | i just came to say hello",
              "videoId": "fn3ldZ5xSZI",
              "viewCountText": "600,291 views"
            }
          },
          {
            "video": {
              "channelId": "UC5HPMnG14ZkcRfTS2eLGEog",
              "channelName": "O'Shea Jackson",
              "description": "War & Peace Vol. 2 (The Peace Disc) is the sixth studio album by American rapper Ice Cube, released March 21, 2000 on Priority ...",
              "lengthText": "3:59",
              "publishedTimeText": "11 years ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/jK5FOyMhDOY/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBmu1tz11P7_MXGO_Tr0dacDeTfSQ",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/jK5FOyMhDOY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD3yutkv2GoTTiz4P57A87oYPE_Kw",
                  "width": 720
                }
              ],
              "title": "01 - Ice Cube - Hello",
              "videoId": "jK5FOyMhDOY",
              "viewCountText": "8,128,399 views"
            }
          },
          {
            "video": {
              "channelId": "UCGAwvRafxQ2Iy9-_ZIOdfIQ",
              "channelName": "Brian Sears",
              "description": "Provided to YouTube by Ghostlight Records ",
              "lengthText": "2:53",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/NHb_BNA3fn8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAoc0wmHaMqruQ11awTo2ecFX6EDg",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/NHb_BNA3fn8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC19KGjI2O72xr-VDOo0j4K_6zY1Q",
                  "width": 720
                }
              ],
              "title": "Hello!",
              "videoId": "NHb_BNA3fn8",
              "viewCountText": "2,087,150 views"
            }
          },
          {
            "video": {
              "channelId": "UCiiD9QKBJVMIXscMQBWlYPA",
              "channelName": "Adele Live Official",
              "description": "An Audience with Adele” concert filmed at the London Palladium on November 6, 2021.",
              "lengthText": "4:57",
              "publishedTimeText": "10 months ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/MqalPR2gaWs/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDv8qsBZSa4Lr3m5sr76C2hUlcfkw",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/MqalPR2gaWs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBGoZ-xghIxDnIM7I9wNgjVbWDHbg",
                  "width": 720
                }
              ],
              "title": "Adele - Hello (Live - An Audience With Adele)",
              "videoId": "MqalPR2gaWs",
              "viewCountText": "1,576,441 views"
            }
          },
          {
            "video": {
              "channelId": "UCUamVL0L_lgG720vqmdZqoA",
              "channelName": "Noodle & Pals",
              "description": "******* 0:00 - Intro 0:05 - ",
              "lengthText": "1:03:36",
              "publishedTimeText": "3 months ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/2Hpz1pWbQlE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCTHdt9-xry8MVt8e6WpL9rAmwPdA",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/2Hpz1pWbQlE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaCw5PN70RDHDiqQn7WDZEw-nLFA",
                  "width": 720
                }
              ],
              "title": "Hello Hello + More Kids Songs | Nursery Rhymes | Noodle & Pals",
              "videoId": "2Hpz1pWbQlE",
              "viewCountText": "3,245,937 views"
            }
          },
          {
            "video": {
              "channelId": "UCeR23qAmPm1EM-HbhiS5G4Q",
              "channelName": "The Official Skye",
              "description": "Please Subscribe and hit That Post Notification Bell To Get Notified Each Time a Video Is Unloaded. I do not own the rights to the ...",
              "lengthText": "3:13",
              "publishedTimeText": "4 months ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/v6FSzxEFw8A/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC3Hp3BHsQ0QGVuBMeuLr4pT4NXgA",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/v6FSzxEFw8A/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBmmfBu3hE8LNX5GH1EXlBFOww5CQ",
                  "width": 720
                }
              ],
              "title": "Aqyila - Hello (Lyric Video)",
              "videoId": "v6FSzxEFw8A",
              "viewCountText": "75,376 views"
            }
          },
          {
            "video": {
              "channelId": "UC0iBxbTB-vIfoSOp6th5l_w",
              "channelName": "Miss Linky - Educational Videos for Kids",
              "description": "misslinky #hellosong #helloeverybody Download the Karaoke Version: ...",
              "lengthText": "1:48",
              "publishedTimeText": "3 years ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/pqDEwPi7vxg/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCIlw8EjyLQPJf_HWsnBZhT1Xz3tQ",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/pqDEwPi7vxg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLABbZW0dZck4GqPomPu_nZtKFVAzw",
                  "width": 720
                }
              ],
              "title": "Hello Song for Children | Morning Stretch Song for Kids | English Greeting Song",
              "videoId": "pqDEwPi7vxg",
              "viewCountText": "11,679,783 views"
            }
          },
          {
            "video": {
              "channelId": "UCtPHmTX4_qC_h5cerkmLThQ",
              "channelName": "Neil Diamond",
              "description": "Official Audio for ",
              "lengthText": "4:02",
              "publishedTimeText": "3 months ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/5O6KDuKJoB0/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB8N4qrjopUtqFrQWFYUKfVrB2MQw",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/5O6KDuKJoB0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDeAnTgiAXGKvfaue1NwdMYahTQtw",
                  "width": 720
                }
              ],
              "title": "Neil Diamond - Hello Again (From \"The Jazz Singer\" Soundtrack / Audio)",
              "videoId": "5O6KDuKJoB0",
              "viewCountText": "232,401 views"
            }
          },
          {
            "video": {
              "channelId": "UCFXyVm03fMlzI4B4sQkDtBA",
              "channelName": "Dj Maphorisa",
              "description": "Song Title: ",
              "lengthText": "4:02",
              "publishedTimeText": "1 year ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/u2V08RBLOdM/hq720.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgAKkBYoCDAgAEAEYVSBhKGUwDw==&rs=AOn4CLDwyLNlqzmIVseLEgotdi5I3vk8_w",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/u2V08RBLOdM/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgAKkBYoCDAgAEAEYVSBhKGUwDw==&rs=AOn4CLB6eb44hXdRiJ0TnG-M_ksboZwjHw",
                  "width": 720
                }
              ],
              "title": "Kabza De Small & DJ Maphorisa - Hello (Official Video) ft. Madumane",
              "videoId": "u2V08RBLOdM",
              "viewCountText": "7,666,814 views"
            }
          },
          {
            "video": {
              "channelId": "UCZwJNsS8DxGT8iTtOVbYUNg",
              "channelName": "blueface bleedem",
              "description": "Blueface #",
              "lengthText": "2:25",
              "publishedTimeText": "6 months ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/u45vFY-bHFk/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBSLtpjhs8gSp_jIwwYJW-NRrg6Qg",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/u45vFY-bHFk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAPCPLhUSe8mC7FdAX_U4SlhKEG2g",
                  "width": 720
                }
              ],
              "title": "Blueface - Hello (Official Music Video)",
              "videoId": "u45vFY-bHFk",
              "viewCountText": "3,215,421 views"
            }
          },
          {
            "video": {
              "channelId": "UCpmD3iT-8TQzRuygIiS9bAw",
              "channelName": "Conor Maynard",
              "description": "I'M GOING ON TOUR! Link to tickets: https://listings.ticketweb.co.uk/conormaynard SUBSCRIBE TO ANTH: ...",
              "lengthText": "6:27",
              "publishedTimeText": "8 years ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/rDWuqrJAyGw/hq720.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYaiBqKGowDw==&rs=AOn4CLDeZjKxKLfAwnl437uBgbspOdwmUg",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/rDWuqrJAyGw/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYaiBqKGowDw==&rs=AOn4CLCUjXsLcz3jofpQAd5Gy3ju7-vjMw",
                  "width": 720
                }
              ],
              "title": "Adele - Hello",
              "videoId": "rDWuqrJAyGw",
              "viewCountText": "80,203,718 views"
            }
          },
          {
            "video": {
              "channelId": "UCB1W3WXbDmsEG_hQLxYALgg",
              "channelName": "Kenny Chesney",
              "description": "Provided to YouTube by BNA Records Label You Had Me from ",
              "lengthText": "3:51",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/R2aNnDm1ero/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBX4sU0VzWc9lT-TKHdWZuVzwTI1Q",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/R2aNnDm1ero/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAW5qm99g3g3TbaJHUNeuP5tqDe-A",
                  "width": 720
                }
              ],
              "title": "You Had Me from Hello",
              "videoId": "R2aNnDm1ero",
              "viewCountText": "11,439,997 views"
            }
          },
          {
            "video": {
              "channelId": "UCWHOWnvY3XiJjUj4ott0O0w",
              "channelName": "Fun English",
              "description": "For educational use only. Images from various sources.",
              "lengthText": "2:21",
              "publishedTimeText": "9 years ago",
              "thumbnails": [
                {
                  "height": 202,
                  "url": "https://i.ytimg.com/vi/2nYjGy_ZUG8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAt2heDM-LwN4h3CjH1fKYL-K4PQQ",
                  "width": 360
                },
                {
                  "height": 404,
                  "url": "https://i.ytimg.com/vi/2nYjGy_ZUG8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA1QosVh5B660R6tO6VI6rh6SbAjQ",
                  "width": 720
                }
              ],
              "title": "Hello To All The Children Of The World",
              "videoId": "2nYjGy_ZUG8",
              "viewCountText": "6,814,004 views"
            }
          }
        ],
        "estimatedResults": "1597603086",
        "next": "EpgDEgVoZWxsbxqOA1NDaUNBUXQwTURjeFYyMDBOWEZYVFlJQkMxVXhWSHBYVjFoM2NXSkpnZ0VMTjBoR01WTm1iM016ZGpTQ0FRdHJPVk5VZVdOWlZVTm1jNElCQzBGNGVEbEpUV1JNTkdwamdnRUxWREYwYkRZMmRISllWRkdDQVFzeVgyVkpUalJIVlRadVk0SUJDMlp1TTJ4a1dqVjRVMXBKZ2dFTGFrczFSazk1VFdoRVQxbUNBUXRPU0dKZlFrNUJNMlp1T0lJQkMwMXhZV3hRVWpKbllWZHpnZ0VMTWtod2VqRndWMkpSYkVXQ0FRdDJOa1pUZW5oRlJuYzRRWUlCQzNCeFJFVjNVR2szZG5obmdnRUxOVTgyUzBSMVMwcHZRakNDQVF0MU1sWXdPRkpDVEU5a1RZSUJDM1UwTlhaR1dTMWlTRVpyZ2dFTGNrUlhkWEZ5U2tGNVIzZUNBUXRTTW1GT2JrUnRNV1Z5YjRJQkN6SnVXV3BIZVY5YVZVYzRzZ0VHQ2dRSUZSQUM2Z0VDQ0FJJTNEGIHg6BgiC3NlYXJjaC1mZWVk"
      }];
      // await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = [
        {
          "bodyPart": "upper legs",
          "equipment": "leverage machine",
          "gifUrl": "https://v2.exercisedb.io/image/Uyln3gSHKxRMk7",
          "id": "0597",
          "name": "lever seated hip abduction",
          "target": "abductors",
          "secondaryMuscles": [
            "glutes",
            "hamstrings"
          ],
          "instructions": [
            "Adjust the seat height so that your knees are at a 90-degree angle.",
            "Sit on the machine with your back against the backrest and your feet on the footrests.",
            "Place your hands on the side handles for stability.",
            "Engage your abductors and slowly push your legs apart, away from the midline of your body.",
            "Pause for a moment at the end of the movement, then slowly bring your legs back together to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "upper legs",
          "equipment": "resistance band",
          "gifUrl": "https://v2.exercisedb.io/image/CWBiOg3-pNlQg5",
          "id": "3006",
          "name": "resistance band seated hip abduction",
          "target": "abductors",
          "secondaryMuscles": [
            "glutes",
            "hamstrings"
          ],
          "instructions": [
            "Sit on a chair or bench with your back straight and feet flat on the ground.",
            "Wrap the resistance band around your thighs, just above your knees.",
            "Place your hands on the sides of the chair or bench for support.",
            "Engage your abductors (outer thigh muscles) and slowly push your knees apart, against the resistance of the band.",
            "Pause for a moment at the end of the movement, then slowly bring your knees back together.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/pl0SgaLCf5lb5H",
          "id": "1774",
          "name": "side bridge hip abduction",
          "target": "abductors",
          "secondaryMuscles": [
            "glutes",
            "obliques"
          ],
          "instructions": [
            "Lie on your side with your legs extended and stacked on top of each other.",
            "Prop yourself up on your forearm, keeping your elbow directly below your shoulder.",
            "Engage your core and lift your hips off the ground, creating a straight line from your head to your feet.",
            "While keeping your core engaged, lift your top leg as high as possible without rotating your hips.",
            "Pause for a moment at the top, then lower your leg back down.",
            "Repeat for the desired number of repetitions, then switch sides."
          ]
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/oEVC03dRsOaFSH",
          "id": "0710",
          "name": "side hip abduction",
          "target": "abductors",
          "secondaryMuscles": [
            "glutes",
            "quadriceps"
          ],
          "instructions": [
            "Stand with your feet shoulder-width apart and your hands on your hips.",
            "Shift your weight to one leg and lift the opposite leg out to the side, keeping it straight.",
            "Pause for a moment at the top, then slowly lower your leg back down to the starting position.",
            "Repeat on the other side.",
            "Continue alternating sides for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "https://v2.exercisedb.io/image/wUu6pD4vL8ZEZc",
          "id": "1427",
          "name": "straight leg outer hip abductor",
          "target": "abductors",
          "secondaryMuscles": [
            "glutes",
            "hamstrings"
          ],
          "instructions": [
            "Lie on your side with your legs straight and stacked on top of each other.",
            "Place your bottom arm under your head for support.",
            "Engage your core and lift your top leg as high as possible without rotating your hips or leaning backward.",
            "Pause for a moment at the top, then slowly lower your leg back down to the starting position.",
            "Repeat for the desired number of repetitions, then switch sides."
          ]
        }
      ];
      // await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = [
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://v2.exercisedb.io/image/KdLHj-BYPpHHi4",
          "id": "0011",
          "name": "assisted hanging knee raise",
          "target": "abs",
          "secondaryMuscles": [
            "hip flexors"
          ],
          "instructions": [
            "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
            "Engage your core muscles and lift your knees towards your chest, bending at the hips and knees.",
            "Pause for a moment at the top of the movement, squeezing your abs.",
            "Slowly lower your legs back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://v2.exercisedb.io/image/I9WuOUNMVc5KvU",
          "id": "0010",
          "name": "assisted hanging knee raise with throw down",
          "target": "abs",
          "secondaryMuscles": [
            "hip flexors",
            "lower back"
          ],
          "instructions": [
            "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
            "Engage your core and lift your knees towards your chest, keeping your legs together.",
            "Once your knees are at chest level, explosively throw your legs down towards the ground, extending them fully.",
            "Allow your legs to swing back up and repeat the movement for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "lower legs",
          "equipment": "assisted",
          "gifUrl": "https://v2.exercisedb.io/image/QleMteLm9RW7ee",
          "id": "1708",
          "name": "assisted lying calves stretch",
          "target": "calves",
          "secondaryMuscles": [
            "hamstrings"
          ],
          "instructions": [
            "Lie on your back with your legs extended.",
            "Bend one knee and place your foot flat on the ground.",
            "Using your hands or a towel, gently pull your toes towards your body, feeling a stretch in your calf.",
            "Hold the stretch for 20-30 seconds.",
            "Release the stretch and repeat on the other leg."
          ]
        },
        {
          "bodyPart": "upper legs",
          "equipment": "assisted",
          "gifUrl": "https://v2.exercisedb.io/image/ZnIn6jehDtHaSe",
          "id": "1709",
          "name": "assisted lying glutes stretch",
          "target": "glutes",
          "secondaryMuscles": [
            "hamstrings"
          ],
          "instructions": [
            "Lie on your back with your legs extended.",
            "Bend your right knee and place your right ankle on your left thigh, just above the knee.",
            "Grasp your left thigh with both hands and gently pull it towards your chest.",
            "Hold the stretch for 20-30 seconds.",
            "Release and repeat on the other side."
          ]
        },
        {
          "bodyPart": "upper legs",
          "equipment": "assisted",
          "gifUrl": "https://v2.exercisedb.io/image/WtLEm9D5SSDefB",
          "id": "1710",
          "name": "assisted lying gluteus and piriformis stretch",
          "target": "glutes",
          "secondaryMuscles": [
            "hamstrings"
          ],
          "instructions": [
            "Lie on your back with your legs extended.",
            "Bend your right knee and place your right ankle on your left thigh, just above the knee.",
            "Grasp your left thigh with both hands and gently pull it towards your chest.",
            "Hold the stretch for 20-30 seconds.",
            "Release the stretch and repeat on the other side."
          ]
        },
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://v2.exercisedb.io/image/x9JB61uUeuMY6U",
          "id": "0012",
          "name": "assisted lying leg raise with lateral throw down",
          "target": "abs",
          "secondaryMuscles": [
            "hip flexors",
            "obliques"
          ],
          "instructions": [
            "Lie flat on your back with your legs extended and your arms by your sides.",
            "Place your hands under your glutes for support.",
            "Engage your abs and lift your legs off the ground, keeping them straight.",
            "While keeping your legs together, lower them to one side until they are a few inches above the ground.",
            "Pause for a moment, then lift your legs back to the starting position.",
            "Repeat the movement to the other side.",
            "Continue alternating sides for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://v2.exercisedb.io/image/zE64F8G2bSw10F",
          "id": "0013",
          "name": "assisted lying leg raise with throw down",
          "target": "abs",
          "secondaryMuscles": [
            "hip flexors",
            "quadriceps"
          ],
          "instructions": [
            "Lie flat on your back with your legs extended and your arms by your sides.",
            "Place your hands under your glutes for support.",
            "Engage your core and lift your legs off the ground, keeping them straight.",
            "Raise your legs until they are perpendicular to the ground.",
            "Lower your legs back down to the starting position.",
            "Simultaneously, throw your legs down towards the ground, keeping them straight.",
            "Raise your legs back up to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "upper legs",
          "equipment": "assisted",
          "gifUrl": "https://v2.exercisedb.io/image/TOndWvkj6OUAQy",
          "id": "0016",
          "name": "assisted prone hamstring",
          "target": "hamstrings",
          "secondaryMuscles": [
            "glutes",
            "lower back"
          ],
          "instructions": [
            "Lie face down on a mat or bench with your legs fully extended.",
            "Have a partner or use a resistance band to secure your ankles.",
            "Engage your hamstrings and lift your legs towards your glutes, keeping your knees straight.",
            "Pause for a moment at the top, then slowly lower your legs back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        },
        {
          "bodyPart": "upper legs",
          "equipment": "assisted",
          "gifUrl": "https://v2.exercisedb.io/image/wRcP4andeF4WFv",
          "id": "1713",
          "name": "assisted prone lying quads stretch",
          "target": "quads",
          "secondaryMuscles": [
            "hamstrings",
            "glutes"
          ],
          "instructions": [
            "Lie face down on the ground with your legs extended.",
            "Bend your left knee and reach back with your left hand to grab your left foot or ankle.",
            "Gently pull your left foot towards your glutes, feeling a stretch in your left quad.",
            "Hold the stretch for 20-30 seconds, then release.",
            "Repeat with your right leg."
          ]
        },
        {
          "bodyPart": "waist",
          "equipment": "assisted",
          "gifUrl": "https://v2.exercisedb.io/image/ZRd-sUtHNPsh8y",
          "id": "1714",
          "name": "assisted prone rectus femoris stretch",
          "target": "abs",
          "secondaryMuscles": [
            "quadriceps"
          ],
          "instructions": [
            "Lie face down on the ground with your legs straight.",
            "Bend your right knee and reach back with your right hand to grab your right foot or ankle.",
            "Gently pull your right foot or ankle towards your glutes, feeling a stretch in the front of your right thigh.",
            "Hold the stretch for 20-30 seconds.",
            "Release and repeat on the other side."
          ]
        }
      ];
      // await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
