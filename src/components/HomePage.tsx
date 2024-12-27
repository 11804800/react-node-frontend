import { useState } from "react"
import CreateNoteModal from "./CreateNoteModal"
import EditNote from "./EditNote";

function HomePage() {

  const [EditNoteModalActive, setEditNoteModalActive] = useState<boolean>(false);
  const [CreateNoteModalActive, setCreateNoteModalActive] = useState<boolean>(false);
  return (
    <div className="dashboard-container inter">
      <div className="Nav-container">
        <img src="./logo.png" alt="logo" className="logo-img" />
        <h1>Dashboard</h1>
        <div className="sign-out-div">
          <button className="link-btn" >Sign Out</button>
        </div>
      </div>
      <div className="message-container">
        <h3>Welcome, !</h3>
        <p>Email: </p>
      </div>
      <div className="create-note-div" style={{ justifyContent: "center" }}>
        <button className="blue-btn" onClick={() => setCreateNoteModalActive(true)}>Create Note</button>
      </div>
      <div className="Note-Container">
        <h3 className="font-medium">Notes</h3>
        <div className="Note-List">
          <div className="no-notes-div">
            <h4 className="font-medium">No Notes Create New</h4>
            <button className="blue-btn" style={{ width: "180px" }} onClick={() => setCreateNoteModalActive(true)}>Create Note</button>
          </div>
        </div>
      </div>
      {
        CreateNoteModalActive &&
        <CreateNoteModal setCreateNoteModalActive={setCreateNoteModalActive} />
      }
      {
        EditNoteModalActive && <EditNote setEditNoteModalActive={setEditNoteModalActive} />
      }
    </div>
  )
}

export default HomePage
