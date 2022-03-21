import styled from 'styled-components'

export const FooterStyled = styled.div`
  display: flex;
  font-size: 14px;
  position: relative;
  align-items: center;
  min-height: 291px;
  margin-left: 40px;
  overflow: hidden;
  // Tablet view
  @media(max-width: 869px) {
    margin-right: 80px;
    margin-left: 80px;
  }
  // Mobile view
  @media(max-width: 400px) {
    min-height: auto;
    text-align: start;
    font-size: 13px;
    margin-right: 35px;
    margin-left: 35px;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;

  @media(max-width: 869px) {
    padding-left: 20px;
    gap: 60px;

    &::before {
      content: '';
      position: absolute;
      background: transparent url('/line.png') 0% 0% repeat padding-box;
      top: 50px;
      left: 0;
      height: 100%;
      width: 1px;
    }
  }

  // Mobile view
  @media(max-width: 400px) {
    display: grid;
    grid-template-columns: auto;
    gap: 30px;

    .footer-logo {
      display: none;
    }

    &::before {
      top: 0;
    }
  }
`

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  max-width: 400px;
  gap: 4px;

  @media(max-width: 869px) {
    padding-left: 0px;
  }
`

export const IntroStyled = styled.div`
  position: relative;
  min-width: 570px;

  &::before {
    content: '';
    position: absolute;
    background: transparent url('/line.png') 0% 0% repeat padding-box;
    top: -40px;
    left: -30px;
    height: 1000px;
    width: 1px;
  }

  // Tablet view
  @media(max-width: 869px) {
    min-width: auto;
    &::before {
      display: none;
    }
  }
`