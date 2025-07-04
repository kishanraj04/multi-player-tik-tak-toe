import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName:"",
    avatar:""
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setLoginUser:(state,action)=>{
            state.userName = action?.payload?.name,
            state.avatar = action?.payload?.avatar
        }
    }
})

export const {setLoginUser} = userSlice?.actions

export default userSlice?.reducer