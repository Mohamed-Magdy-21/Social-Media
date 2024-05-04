import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <header>  
        My Header
        <Outlet /> 
      </header>
    </div>


  )
}
