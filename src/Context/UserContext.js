import { createContext, useState } from "react";


export let userContext =createContext()

export default  function UserContextProvider(props){
let [userToken, setUserToken] = useState(null)
let [login,setLogin]=useState(null)
let [isOpen,setIsOpen]=useState(false)

    return<>
    <userContext.Provider value={{userToken,setUserToken,login,setLogin,isOpen,setIsOpen}}>
      {props.children}
    </userContext.Provider>
    </>
}