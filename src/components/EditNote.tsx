import { FaTimes } from "react-icons/fa";
function EditNote({setEditNoteModalActive}:{setEditNoteModalActive:any}) {
  return (
        <div className='create-note-modal-container inter'>
            <div className="Create-note-form-container">
                <div className="flex-row" style={{ justifyContent: "space-between" }}>
                    <h3 className="font-medium">Edit Note</h3>
                    <button className="close-btn" onClick={()=>setEditNoteModalActive(false)}><FaTimes size={23}/></button>
                </div>
                <div className="create-note-form">
                    <div className="input-container">
                        {/* <label className="input-label">Email</label> */}
                        <input type="text" placeholder="Enter Something.." />
                    </div>
                    <div className="flex-end">
                    <button className="blue-btn" style={{width:"fit-content"}}>Create</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default EditNote;
