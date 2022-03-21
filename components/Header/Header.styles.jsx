import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 30vh;
  margin-left: 40px;

  // Tablet view
  @media(max-width: 869px) {
    position: relative;
    min-height: 380px;
    margin-left: 80px;
  }

  // Mobile view
  @media(max-width: 400px) {
    min-height: 160px;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;

  // Tablet view
  @media(max-width: 869px) {
    display: flex;
    flex-direction: column;
  }
`

export const LogoStyled = styled.div`
  padding-left: 40px;

  // Tablet view
  @media(max-width: 869px) {
    padding: 0px;
    position: fixed;
    z-index: 2;
    top: 30px;
    left: 80px;

    & img {
      width: 106px !important;
      height: 56.33px !important;
    }
  }

  // Mobile view
  @media(max-width: 400px) {
    left: 35px;
  }
`

export const Nav = styled.nav`
  display: flex; 
  flex-direction: row-reverse;

  // Tablet view
  @media(max-width: 869px) {
    position: absolute;
    top: 40px;
    right: 40px;
  }
`

export const IntroStyled = styled.div`
  position: relative;
  min-width: 570px;
  font-size: 28px;
  
  &::before {
    content: '';
    position: absolute;
    background: transparent url('/line.png') 0% 0% no-repeat padding-box;
    left: -30px;
    top: -100px;
    height: 500px;
    width: 1px;
  }

  // Tablet view
  @media(max-width: 869px) {
    min-width: 400px; // <---------
    max-width: 500px;
    font-size: 24px;

    &::before {
      display: none;
    }
  }
  @media(max-width: 400px) {
    display: none;
  }
`