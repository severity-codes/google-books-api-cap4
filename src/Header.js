import React from "react";

import {Link} from 'react-router-dom'
function Header(){
    return (
<div className="header">
 <nav>
<Link to='/Home'>Home</Link>
    <Link to='/DashBoard'>DashBoard</Link>
    <Link to='/Community'>Community</Link>
    <Link to='/Search'>Search</Link>
    <Link to='/SignUp'>SignUp</Link>
  
  </nav> 
    </div>
    )
    
  
}

export default Header