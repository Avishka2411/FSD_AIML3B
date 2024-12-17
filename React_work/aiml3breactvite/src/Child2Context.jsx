import React, { useContext } from 'react'
import { studentcontext } from '../AppContext';

function Child2Context() {
    const child2data=useContext(studentcontext);
  return (
    <div>Child2Context
        Name:{child2data.name}
    </div>
  )
}

export default Child2Context