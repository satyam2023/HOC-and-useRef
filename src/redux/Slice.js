import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    Name: null,
    phonenumber:null,
    email:null,
    password: null,
    token:"$nkdnk#2@nd@jdm$Jdn",
    isLog :false,
  },
  reducers: {
    setToken(state,action){
        state.token=action.payload;
    }
  },
});

export const {setToken } = userSlice.actions;
export default userSlice.reducer;