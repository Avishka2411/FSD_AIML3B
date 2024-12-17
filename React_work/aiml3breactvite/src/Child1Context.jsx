import React, { useContext, useState } from 'react'
import { studentcontext } from '../AppContext';

function Child1Context() {
    const data=useContext(studentcontext);
  return (
    <div>Child1Context

Name:{data.name}
    </div>
  )
}

export default Child1Context