import React, { Children } from 'react'
import {Header} from './'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return( 
        <>
      <Navbar/>
      {children}
    </>
    )
  }