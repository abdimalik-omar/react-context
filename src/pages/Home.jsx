import { useContext } from "react";
import Landing from "../components/Landing";
import { StudentContext } from "../context/StudentContext";


export default function Home({myName}) 
{
    const {name, school} = useContext(StudentContext)
    
  return (
    <div>
        <h1>Home</h1>
        <h4>{name}</h4>
        <Landing name={myName} />
    </div>
  )
}
