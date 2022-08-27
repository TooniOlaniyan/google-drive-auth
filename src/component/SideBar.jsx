import React from 'react'
import styled from 'styled-components'
import {FaUserFriends} from 'react-icons/fa'

function SideBar() {
  return (
    <Main>
        <p className='heading'><FaUserFriends className='icon'/>   Welcome</p>
        <p>Here are your files</p>
    </Main>
  )
}
const Main = styled.div`
  border-right: 1px solid black;
  min-height: 100vh;
  .heading {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
    font-weight: 900;
    letter-spacing: 2px;
    font-size: 20px;
    border-bottom: 0.5px solid gray;
    max-height: 3.5rem;
    .icon {
      font-size: 28px;
      color: #820000;
    }
  }

  flex: 1;
`
export default SideBar