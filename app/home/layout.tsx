'use client'
import NavBar from 'components/NavBar'
import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="z-10">
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
