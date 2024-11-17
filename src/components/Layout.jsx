import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
    
        </ul>
      </nav>
     
     <div style={{backgroundColor:"green", minHeight:"90vh"}}>
         <Outlet />
     </div>
     

      <div>
        FOOTER
      </div>
        

    </div>
  )
}
