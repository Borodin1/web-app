import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    firstName: "Olga",
    lastName: "Grankina",
    fullName: "Olga Grankina",
  },
  { id: "1", firstName: "Andrey", lastName: "Dedov", fullName: "Andrey Dedov" },
  {
    id: "2",
    firstName: "Vyacheslav",
    lastName: "Oleynik",
    fullName: "Vyacheslav Oleynik",
  },
  {
    id: "3",
    firstName: "Alexander",
    lastName: "Borodin",
    fullName: "Alexander Borodin ",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
