import React from 'react'
import styled from 'styled-components'
import Content from '../component/Content'
import SideBar from '../component/SideBar'

function Home() {
  return (
    <Main>
        <SideBar/>
        <Content/>
    </Main>
  )
}
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`

export default Home