import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
export const users = [
    {
      _id: userIds[0],
      firstName: "test",
      lastName: "me",
      email: "aaaaaa@gmail.com",
      password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
      picturePath: "p11.jpg",
      friends: [],
      location: "San Fran, CA",
      occupation: "Software Engineer",
      viewedProfile: 14561,
      impressions: 888822,
      createdAt: 1115211422,
      updatedAt: 1115211422,
      __v: 0,
    },
    {
      _id: userIds[1],
      firstName: "Juan",
      lastName: "Nuñez",
      email: "jnuñez@gmail.com",
      password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
      picturePath: "p3.jpg",
      friends: [],
      location: "New York, CA",
      occupation: "Lawyer",
      viewedProfile: 12351,
      impressions: 55555,
      createdAt: 1595589072,
      updatedAt: 1595589072,
      __v: 0,
    },
    {
      _id: userIds[2],
      firstName: "José",
      lastName: "Perez",
      email: "someJuan@gmail.com",
      password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
      picturePath: "p4.jpg",
      friends: [],
      location: "Canada, CA",
      occupation: "Data Scientist Hacker",
      viewedProfile: 45468,
      impressions: 19986,
      createdAt: 1288090662,
      updatedAt: 1288090662,
      __v: 0,
    },
    {
      _id: userIds[3],
      firstName: "Stella",
      lastName: "Doing",
      email: "StellaDoing@gmail.com",
      password: "$2b$10$unique_password_here1", 
      picturePath: "p6.jpg",
      friends: [],
      location: "Korea, CA",
      occupation: "Educator",
      viewedProfile: 41024,
      impressions: 55316,
      createdAt: 1219214568,
      updatedAt: 1219214568,
      __v: 0,
    },
    {
      _id: userIds[4],
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@gmail.com",
      password: "$2b$10$unique_password_here2", 
      picturePath: "p5.jpg",
      friends: [],
      location: "Utah, CA",
      occupation: "Teacher",
      viewedProfile: 40212,
      impressions: 7758,
      createdAt: 1493463661,
      updatedAt: 1493463661,
      __v: 0,
    },
    {
      _id: userIds[5],
      firstName: "Harvey",
      lastName: "Dunn",
      email: "harveydunn@gmail.com",
      password: "$2b$10$unique_password_here3", 
      picturePath: "p7.jpg",
      friends: [],
      location: "Los Angeles, CA",
      occupation: "Journalist",
      viewedProfile: 976,
      impressions: 4658,
      createdAt: 1381326073,
      updatedAt: 1381326073,
      __v: 0,
    },
    {
      _id: userIds[6],
      firstName: "Carly",
      lastName: "Vowel",
      email: "carlyvowel@gmail.com",
      password: "$2b$10$unique_password_here4",
      picturePath: "p8.jpg",
      friends: [],
      location: "Chicago, IL",
      occupation: "Nurse",
      viewedProfile: 1510,
      impressions: 77579,
      createdAt: 1714704324,
      updatedAt: 1642716557,
      __v: 0,
    },
    {
      _id: userIds[7],
      firstName: "Jessica",
      lastName: "Dunn",
      email: "jessicadunn@gmail.com",
      password: "$2b$10$unique_password_here5",
      picturePath: "p9.jpg",
      friends: [],
      location: "Washington, DC",
      occupation: "A Student",
      viewedProfile: 19420,
      impressions: 82970,
      createdAt: 1369908044,
      updatedAt: 1359322268,
      __v: 0,
    },
  ];
  
  export const posts = [
    {
      _id: new mongoose.Types.ObjectId(),
      userId: userIds[1],
      firstName: "Juan",
      lastName: "NUñez",
      location: "New York, CA",
      description: "bienvenido al mundo Máximo",
      picturePath: "post1.jpeg",
      userPicturePath: "p3.jpg",
      likes: new Map([
        [userIds[0], true],
        [userIds[2], true],
        [userIds[3], true],
        [userIds[4], true],
      ]),
      comments: [
        "Felicitaciones",
        "Bienvenido Bebe",
        "Felicitaciones a todos",
      ],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      userId: userIds[3],
      firstName: "Harvey",
      lastName: "Dunn",
      location: "Los Angeles, CA",
      description:
        "I'm so in love with this two",
      picturePath: "post2.jpeg",
      userPicturePath: "p7.jpg",
      likes: new Map([
        [userIds[7], true],
        [userIds[4], true],
        [userIds[1], true],
        [userIds[2], true],
      ]),
      comments: [
        "So Cute",
        "Love it",
        "What a cute little boy",
        "I miss you guys",
      ],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      userId: userIds[4],
      firstName: "Jane",
      lastName: "Doe",
      location: "Utah, CA",
      description:
        "Oh my gosh, he was so little",
      picturePath: "post3.jpg",
      userPicturePath: "p5.jpg",
      likes: new Map([
        [userIds[1], true],
        [userIds[6], true],
        [userIds[3], true],
        [userIds[5], true],
      ]),
      comments: [
        "He was a beautiful baby",
        "I love you both",
        "cute",
        "OMG love you Ethan",
        "time flies",
      ],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      userId: userIds[5],
      firstName: "Harvey",
      lastName: "Dunn",
      location: "Los Angeles, CA",
      description:
        "Pediatrician appointment",
      picturePath: "post4.jpg",
      userPicturePath: "p7.jpg",
      likes: new Map([
        [userIds[1], true],
        [userIds[6], true],
        [userIds[3], true],
      ]),
      comments: [
        "What a good boy",
        "he is always smiling",
        "looove",
        "such a cute little boy",
        "fav",
      ],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      userId: userIds[6],
      firstName: "Carly",
      lastName: "Vowel",
      location: "Chicago, IL",
      description:
        "Remembering when he was born, I can't believe he'll be turning 3 years old in a few days",
      picturePath: "post5.jpg",
      userPicturePath: "p8.jpg",
      likes: new Map([
        [userIds[1], true],
        [userIds[3], true],
        [userIds[5], true],
        [userIds[7], true],
      ]),
      comments: [
        "wow",
        "big boy",
        "he is so cool",
        "time flies",
        "party is coming",
      ],
    },
]