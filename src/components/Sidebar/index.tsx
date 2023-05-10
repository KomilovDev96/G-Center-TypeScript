import React from 'react'
import SidebarMenuOption from './sidebarMenu'
import StyledSidebar from './Style'
type Props = {}

function SidebarCenter({}: Props) {
  return (
    <StyledSidebar>
            <h1>Sidebar</h1>
            <SidebarMenuOption/>
    </StyledSidebar>
  )
}

export default SidebarCenter