import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 30vh;
  margin-left: 40px;

  // Tablet view
  @media(max-width: 1070px) {
    position: relative;
    min-height: 380px;
    margin-left: 80px;
  }

  @media(max-width: 675px) {
    margin-left: 50px;
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
  @media(max-width: 1070px) {
    display: flex;
    flex-direction: column;
  }
`

export const LogoStyled = styled.div`
  background: none !important;
  padding-left: 40px;

  // Tablet view
  @media(max-width: 1070px) {
    padding: 0px;
    position: fixed;
    z-index: 5;
    top: 30px;
    left: 80px;

    img {
      background: none;
      width: 106px !important;
      height: 56.33px !important;
    }
  }

  @media(max-width: 675px) {
    left: 50px;
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
  @media(max-width: 1070px) {
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
    top: -150px;
    height: 500px;
    width: 1px;
  }

  // Tablet Landscape view
  @media(max-width: 1194px) {
    padding-right: 120px;
  }

  // Tablet view
  @media(max-width: 1070px) {
    max-width: 700px;
    font-size: 30px;
    margin-top: 50px;
    line-height: 40px;
    margin-right: 20px;

    &::before {
      display: none;
    }
  }

  @media(max-width: 834px) {
    min-width: auto;
    width: 100%;
    margin-right: 100px;
    font-size: clamp(1.2rem, 3.5vw, 2rem);
  }

  @media(max-width: 400px) {
    display: none;
  }
`