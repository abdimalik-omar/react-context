import { createContext, useState } from "react";


export const StudentContext = createContext()

export default function StudentProvider ({children}){

   const [name, setName] = useState("Kelvin")
   const [school, setSchool] = useState("Moringa")

   function addStudent(){

   }

    const contextData = {
        name,
        setName,
        school,
        setSchool,
        addStudent
    }

    return (
       <StudentContext.Provider value={contextData}>
        {children}
       </StudentContext.Provider>
    )
}