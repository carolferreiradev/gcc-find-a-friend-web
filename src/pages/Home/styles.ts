import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.palette.primary};
  height: 100vh;
  width: 100vw;
  padding: 4rem 6rem;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Header = styled.header`
  margin-bottom: 13px;
`

export const Logo = styled.div``

export const Banner = styled.section`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 5rem;

  h1 {
    width: 450px;
    font-size: ${(props) => props.theme.typography.xLarger};
    letter-spacing: -0.02em;
    line-height: 90%;
    font-weight: 800;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    width: 450px;
    font-size: ${(props) => props.theme.typography.xMedium};
    line-height: 34px;
    font-weight: 600;
  }

  form {
    display: flex;
    align-items: center;
    span: {
      font-size: ${(props) => props.theme.typography.normal};
      line-height: 34px;
      font-weight: 400;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: ${(props) => props.theme.palette.tertiary};
      border-radius: 20px;
      padding: 1rem;
    }
  }
`

export const SelectState = styled.select`
  border: none;
`

export const SelectCity = styled.select``
