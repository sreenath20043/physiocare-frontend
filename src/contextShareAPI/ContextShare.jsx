
import React, { createContext ,useState} from 'react'

//context create
export const searchContext = createContext("")

function ContextShare({children}) {

    //Global  State for holding seachkey
    const [searchKey , setSearchKey] = useState("")

  return (
    <div>
       <searchContext.Provider value={{searchKey,setSearchKey}}>
        {children}
        </searchContext.Provider> 

    </div>
  )
}

export default ContextShare

