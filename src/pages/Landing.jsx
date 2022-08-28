import React from 'react'
import styled from 'styled-components'
import {FaGoogleDrive} from 'react-icons/fa'
import { gapi ,   } from 'gapi-script'
import {useNavigate} from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()
  const handleAuth = async () => {
    navigate('/main')


  }
  return (
    <Main>
      <p>Click here to access your Documents</p>
      <button onClick={handleAuth}><FaGoogleDrive/>Sign In</button>


    </Main>
  )
}
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 10px;
    letter-spacing: 3px;
    font-weight: 300;
  }
  button {
    padding: 1rem 3rem;
    font-size: 2rem;
    border-radius: 1rem;
    font-weight: 500;
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Aboreto', cursive;
    cursor: pointer;
    background-color: white;
  }
`

export default Landing