import React, { createContext } from 'react'
import Child1Context from './componentcontext/Child1Context';
import Child2Context from './componentcontext/Child2Context';

const studentcontext=createContext();
function AppContext() {
    const studentdata={
        name:"Ram",
        branch:"AIML",
        section:"B",
        college:"ABES Engineering College"
    }
  return (
    <div>
        <studentcontext.Provider value={studentdata}>
            <Child1Context />
            <Child2Context />
        </studentcontext.Provider>
    </div>
  )
}
export {
    studentcontext
}

export default AppContext




