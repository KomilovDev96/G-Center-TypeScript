import SidebarCenter from 'components/Sidebar'
import React from 'react'
import StyledCenter from './Style'
import WrapperCenetr from './Wraper/index';
type Props = {}

function CenterMain({}: Props) {
  return (
    <StyledCenter>
        <div className="center">
            <div className="center__sidebar sidebar">
                <SidebarCenter/>
            </div>
            <div className="center__wrapper wrapper">
                <WrapperCenetr/>
            </div>
        </div>
    </StyledCenter>
  )
}

export default CenterMain