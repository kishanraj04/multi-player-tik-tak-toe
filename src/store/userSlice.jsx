import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  avatar: "",
  token: "",
  friendRequest: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      (state.userName = action?.payload?.name),
        (state.avatar = action?.payload?.avatar);
    },
    setToken: (state, action) => {
      state.token = action?.payload?.token;
    },
    setFriendRequest: (state, action) => {
      const exists = state.friendRequest.some(
        (item) => item.name === action.payload.name
      );
      if (!exists) {
        state.friendRequest.push(action.payload);
      }
    },
  },
});

export const { setLoginUser, setToken, setFriendRequest } = userSlice?.actions;

export default userSlice?.reducer;
