import { createContext, useState } from "react";


export const UserContext = createContext()

export default function UserProvider ({children}){

    const contextData = {
     
    }

    return (
       <UserContext.Provider value={contextData}>
        {children}
       </UserContext.Provider>
    )
}