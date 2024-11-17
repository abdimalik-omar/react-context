import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'

export default function Dashboard() {
    const {name} = useContext(StudentContext)
  return (
    <div>
  <div>Dashboard</div>
  <h3>{name}</h3>
    </div>
  
  )
}
