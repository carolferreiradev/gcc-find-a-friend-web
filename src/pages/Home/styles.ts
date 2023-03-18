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
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span: {
      font-size: ${(props) => props.theme.typography.normal};
      line-height: 34px;
      font-weight: 400;
    }

    button {
      margin-top: 15px;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${(props) => props.theme.palette.tertiary};
      border: none;
      border-radius: 20px;
      transition: filter 0.2s;

      img {
        width: 22px;
      }

      :hover {
        filter: brightness(0.9);
      }
    }

    .selectState {
      width: 80px;
    }
    .selectCity {
      background: #e44449;
      width: 280px;
    }
  }
`
