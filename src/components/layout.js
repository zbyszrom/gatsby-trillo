

import React from "react"
import Header from './header'
import Sidebar from './sidebar'



import "./layout.css"

const Layout = ({ children }) => {
  
  return (
    <>
    <Header/>
    
     <content>
       <Sidebar/>{children}
       </content>
     </>
  )     
}



export default Layout