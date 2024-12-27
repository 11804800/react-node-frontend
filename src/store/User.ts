import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserInterface{
    token:string | null,
    username:string | null,
    User:any
}

function GetToken()
{
    const token=localStorage.getItem("token");
    return token ? JSON.parse(token) : "";
}

function GetUser()
{
    const username=localStorage.getItem("username");
    return username ? JSON.parse(username) : "";
}
const initialState:UserInterface={
    
    token:GetToken(),
    username:GetUser(),
    User:null
}

const UserSlice=createSlice({
    name:"Notes",
    initialState,
    reducers:{
        setToken:(state,action:PayloadAction<string>)=>{
            state.token=action.payload
        },
        setUserName:(state,action:PayloadAction<string>)=>{
            state.username=action.payload
        },
        Logout:(state)=>{
            state.token="";
            state.username="";
            localStorage.removeItem("token");
            localStorage.removeItem("username");
        },
        SetUser:(state,action:PayloadAction<any>)=>{
            state.User=action.payload
        }
    }
});

export const {setToken,setUserName,Logout,SetUser} = UserSlice.actions;
export default UserSlice.reducer;