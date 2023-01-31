import React, {useState, useEffect } from "react";

export const AppContext = React.createContext();

export default function AppProvider({children}) {

    const [toggleSidebar, setToggleSidebar] = useState(true)
    const [show, setShow] = useState(true)
   

    return <AppContext.Provider value={{toggleSidebar, setToggleSidebar, show, setShow}}>
        {children}
    </AppContext.Provider>
}