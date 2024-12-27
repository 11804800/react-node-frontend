import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface NotesInterface{
    values:string[]
}

const initialState:NotesInterface={
    values:[]
}

const NoteSlice=createSlice({
    name:"Notes",
    initialState,
    reducers:{
        EditNote:(state,action:PayloadAction<string>)=>{
            console.log(action.payload);
        },
        DeleteNote:(state,action:PayloadAction<number>)=>{
            console.log(action.payload);
        },
        ShowNotes:(state,action:PayloadAction<string[]>)=>{
            state.values=action.payload
        },
        AddNewNote:(state,action:PayloadAction<string>)=>{
            console.log(action.payload)
        }
    }
});

export const {DeleteNote,EditNote,ShowNotes,AddNewNote} = NoteSlice.actions;
export default NoteSlice.reducer;