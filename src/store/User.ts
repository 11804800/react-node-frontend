import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserInterface{
    token:string | null,
    user:string[]
}

const initialState:UserInterface={
    token:localStorage.getItem("token") ? localStorage.getItem("token") : "",
    user:[]
}

const UserSlice=createSlice({
    name:"Notes",
    initialState,
    reducers:{
        setToken:(state,action:PayloadAction<string>)=>{
            state.token=action.payload
        },
        setUser:(state,action:PayloadAction<string[]>)=>{
            state.user=action.payload
        }
    }
});

export const {setToken,setUser} = UserSlice.actions;
export default UserSlice.reducer;