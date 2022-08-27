import React from 'react'
import styled from 'styled-components'

function Content() {
  return (
    <Main>
      <p>My Drive Files</p>
    </Main>
  )
}

const Main = styled.div`
  flex: 5;
  p{
    padding: 1rem;
    border-bottom: 1px solid black;
    min-height: 2rem;
    font-size: 20px;
    font-weight: 900;
  }
`
export default Content