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
        EditNotes:(state,action:PayloadAction<any>)=>{
            const {index,data}=action.payload;
            state.values[index]=data;
        },
        DeleteNote:(state,action:PayloadAction<number>)=>{
            state.values.splice(action.payload,1);
        },
        ShowNotes:(state,action:PayloadAction<string[]>)=>{
            state.values=action.payload
        },
        AddNewNote:(state,action:PayloadAction<any>)=>{
            state.values.push(action.payload);
        }
    }
});

export const {DeleteNote,EditNotes,ShowNotes,AddNewNote} = NoteSlice.actions;
export default NoteSlice.reducer;