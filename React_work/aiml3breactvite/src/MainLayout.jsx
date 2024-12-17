import React from 'react'
import{Link,Outlet} from 'react-router-dom'
function MainLayout() {
  return (
    <div>
<nav>
<ul style={{backgroundColor:'black',color:'white'}}>
<li style={{display:'inline',padding:'20px'}}><Link to='/login'>Login</Link></li>
<li style={{display:'inline',padding:'20px'}}><Link to='/reg'>Registration</Link></li>

</ul>

</nav>
<Outlet />
    </div>
  )
}

export default MainLayout