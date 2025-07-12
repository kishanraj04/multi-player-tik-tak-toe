import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  avatar: "",
  token: "",
  friendRequest: [],
  isPlaying:false,
  oponentPlayer:"",
  newMessageCount:0
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
    setIsPlaying:(state,action)=>{
      state.isPlaying = action.payload
    },
    setFriendReqEmpty:(state,action)=>{
      state.friendRequest = []
    },
    setOponentPlayer:(state,action)=>{
      state.oponentPlayer = action.payload
    },
    incNewMessageCount:(state,action)=>{
      state.newMessageCount=state.newMessageCount+1;
    },
    setNewMessageCountZero:(state,action)=>{
      state.newMessageCount = 0;
    }
  },
});

export const { setLoginUser, setToken, setFriendRequest ,setIsPlaying,setFriendReqEmpty,setOponentPlayer,incNewMessageCount,setNewMessageCountZero} = userSlice?.actions;

export default userSlice?.reducer;
