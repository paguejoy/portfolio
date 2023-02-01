import React, {useState, useEffect } from "react";

export const AppContext = React.createContext();

export default function AppProvider({children}) {

    const [toggleSidebar, setToggleSidebar] = useState(true)
   

    return <AppContext.Provider value={{toggleSidebar, setToggleSidebar}}>
        {children}
    </AppContext.Provider>
}