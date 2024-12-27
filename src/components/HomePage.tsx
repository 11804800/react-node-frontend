import { useEffect, useState } from "react"
import CreateNoteModal from "./CreateNoteModal"
import EditNote from "./EditNote";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../store/User";
import axios from "axios";
import { DeleteNote, ShowNotes } from "../store/Notes";
import { RootState } from "../store/store";
import { BiEditAlt, BiTrash } from "react-icons/bi";

function HomePage() {

  const dispatch = useDispatch();

  const [EditNoteModalActive, setEditNoteModalActive] = useState({
    visible: false,
    index: -1
  });
  const [CreateNoteModalActive, setCreateNoteModalActive] = useState<boolean>(false);

  const token:string | null=useSelector((state:RootState)=>{
    return state.user.token
  });

  useEffect(() => {
    async function GetNotes() {
      const res = await axios.get("http://localhost:3000/notes",{
        headers:{
          Authorization:`bearer ${token}`
        }
      });
      dispatch(ShowNotes(res.data?.result));
    }
    GetNotes();
  }, []);

  const Notes: any = useSelector((state: RootState) => {
    return state.notes.values
  });

  function UserLogout() {
    dispatch(Logout());
  }



  function DeleteNotes(index: number, _id: string) {
    axios.delete(`http://localhost:3000/notes/${_id}`,{
      headers:{
        Authorization:`bearer ${token}`
      },
    }).then((response) => {
      if(response)
      {
        dispatch(DeleteNote(index));
      }
    }, (err) => alert(err.message)).catch((err) => console.log(err));
  }

  return (
    <div className="dashboard-container inter">
      <div className="Nav-container">
        <img src="./logo.png" alt="logo" className="logo-img" />
        <h1>Dashboard</h1>
        <div className="sign-out-div">
          <button className="link-btn" onClick={UserLogout} >Sign Out</button>
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
          {
            !Notes
              ?
              <div className="no-notes-div">
                <h4 className="font-medium">No Notes Create New</h4>
                <button className="blue-btn" style={{ width: "180px" }} onClick={() => setCreateNoteModalActive(true)}>Create Note</button>
              </div> :
              <>
                {
                  Notes?.map((item: any, index: number) => {
                    return (
                      <div key={item?._id} className="note-card">
                        <p>{item?.title}</p>
                        <div className="modify-btn-div">
                          <BiEditAlt onClick={() => {
                            setEditNoteModalActive({
                              visible: true,
                              index: index
                            });
                          }} />
                          <BiTrash onClick={() => DeleteNotes(index, item?._id)} />
                        </div>
                      </div>
                    )
                  })
                }
              </>
          }
        </div>
      </div>
      {
        CreateNoteModalActive &&
        <CreateNoteModal setCreateNoteModalActive={setCreateNoteModalActive} />
      }
      {
        EditNoteModalActive.visible && <EditNote setEditNoteModalActive={setEditNoteModalActive} index={EditNoteModalActive.index} />
      }
    </div>
  )
}

export default HomePage
