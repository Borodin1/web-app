import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Test Post",
    content: "QWERTY",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: 2,
    title: "About SMTH",
    content: "I want tell about ...",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
];

// const initialState = {
//   posts: [],
//   status: "idle",
//   eror: null,
// };

export default initialState;
