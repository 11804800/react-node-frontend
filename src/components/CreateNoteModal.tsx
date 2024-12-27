import { FaTimes } from "react-icons/fa"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../store/store";
import { AddNewNote } from "../store/Notes";

function CreateNoteModal({ setCreateNoteModalActive }: { setCreateNoteModalActive: any }) {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const User = useSelector((state: RootState) => {
        return state.user.username
    });

    const token: string | null = useSelector((state: RootState) => {
        return state.user.token
    });

    function PushNote() {

        const body={
            title:title,
            author:User
        }
        axios.post("http://localhost:3000/notes",body, {
            headers: {
                Authorization: `bearer ${token}`
            },
        }).then((response) => {
            dispatch(AddNewNote(response?.data));
            setCreateNoteModalActive(false);
        }, (err) => alert(err.message)).catch((err) => {
            console.log(err);
        });

    }


    return (
        <div className='create-note-modal-container inter'>
            <div className="Create-note-form-container">
                <div className="flex-row" style={{ justifyContent: "space-between" }}>
                    <h3 className="font-medium">Create New Note</h3>
                    <button className="close-btn" onClick={() => setCreateNoteModalActive(false)}><FaTimes size={23} /></button>
                </div>
                <div className="create-note-form">
                    <div className="input-container">
                        {/* <label className="input-label">Email</label> */}
                        <input type="text" placeholder="Enter Something.." onChange={(e:any)=>setTitle(e.target.value)} />
                    </div>
                    <div className="flex-end">
                        <button className="blue-btn" style={{ width: "fit-content" }} onClick={PushNote}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNoteModal
