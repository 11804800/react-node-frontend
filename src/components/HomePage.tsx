import { useSelector } from "react-redux"
import { RootState } from "../store/store"

function HomePage() {

  const User=useSelector((state:RootState)=>{
    return state.user.user
  });

  console.log(User);
  return (
    <div>
      Homrpage
    </div>
  )
}

export default HomePage
