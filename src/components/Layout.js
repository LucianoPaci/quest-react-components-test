import React from 'react'
import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'

const Main = styled.main`
  background-color: #e0e0e0;
  position: fixed;
  height: calc(100% - 185px);
  width: 100%;
  padding: 1em;
  overflow-y: scroll;
  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`
const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`
const Header = styled('header')({
  display: 'flex',
})
function Layout() {
  return (
    <>
      <Header>
        <p>Link 1</p>
        <p>Link 2</p>
      </Header>
      <Wrapper>
        {/* <Main> */}
        <Outlet />
        {/* </Main> */}
      </Wrapper>
    </>
  )
}

export default Layout
