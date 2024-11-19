import { createContext, useState } from "react";

export const StudentContext = createContext();

export default function StudentProvider({ children }) {
  const [name, setName] = useState("Kelvin");
  const [school, setSchool] = useState("Moringa");
  const [students, setStudents] = useState([]); 


  function addStudent(newStudent) {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  }


  const contextData = {
    name,
    setName,
    school,
    setSchool,
    students,
    addStudent,
  };

  return (
    <StudentContext.Provider value={contextData}>
      {children}
    </StudentContext.Provider>
  );
}
