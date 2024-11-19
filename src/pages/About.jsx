import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"
import AddStudentForm from "../components/AddStudentForm"

export default function About() {
  const {school,name, setName} = useContext(StudentContext)
  return (
    <div>
        <div>About</div>
        <h6>{school}</h6>
        <h6>{name}</h6>
        <button onClick={()=> setName("abdi")}>update</button>
        <AddStudentForm />

    </div>
  
  )
}
