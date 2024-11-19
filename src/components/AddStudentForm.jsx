import React, { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

export default function AddStudentForm() {
  const { addStudent, students } = useContext(StudentContext);
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, school }); 
    setName(""); 
    setSchool("");
  };

  return (
    <div>
      <h2>Add a New Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>

      <h3>Student List:</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.school}
          </li>
        ))}
      </ul>
    </div>
  );
}
