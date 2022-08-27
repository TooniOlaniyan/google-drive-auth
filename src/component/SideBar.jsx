import React from 'react'
import styled from 'styled-components'

function SideBar() {
  return (
    <Main>
        <p className='heading'>Welcome</p>
        <p>Here are yout files</p>
    </Main>
  )
}
const Main = styled.div`
border-right: 1px solid black;
min-height: 100vh;
.heading{
  padding: 1rem;
  text-align: center;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 20px;
  border-bottom: 0.5px solid gray;
  min-height: 3rem;
}

  
  flex: 1;
`
export default SideBar