import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import axios from "axios";
import { EditNotes } from "../store/Notes";

function EditNote({ setEditNoteModalActive, index }: { setEditNoteModalActive: any, index: number }) {

    const Notes: any = useSelector((state: RootState) => {
        return state.notes.values
    });

    const dispatch=useDispatch();
    const [Note, setNote] = useState(Notes[index]?.title);

    const token: string | null = useSelector((state: RootState) => {
        return state.user.token
    });

    function UpdateNote() {

        const body={
            title:Note
        }
        axios.put(`http://localhost:3000/notes/${Notes[index]?._id}`,body, {
            headers: {
                Authorization: `bearer ${token}`
            },
        }).then((response) => {
            dispatch(EditNotes({index,data:response?.data}));
            setEditNoteModalActive({visible:false});
        }, (err) => alert(err.message)).catch((err) => {
            console.log(err);
        });

    }

    return (
        <div className='create-note-modal-container inter'>
            <div className="Create-note-form-container">
                <div className="flex-row" style={{ justifyContent: "space-between" }}>
                    <h3 className="font-medium">Edit Note</h3>
                    <button className="close-btn" onClick={() => setEditNoteModalActive({visible:false})}><FaTimes size={23} /></button>
                </div>
                <div className="create-note-form">
                    <div className="input-container">
                        {/* <label className="input-label">Email</label> */}
                        <input type="text" placeholder="Enter Something.." value={Note} onChange={(e: any) => setNote(e.target.value)} />
                    </div>
                    <div className="flex-end">
                        <button className="blue-btn" style={{ width: "fit-content" }} onClick={UpdateNote}>Done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditNote;
