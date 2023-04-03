import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.palette.primary};
  height: 100vh;
  width: 100vw;
  padding: 4rem 6rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1270px) {
    padding: 2rem;
  }
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

export const Logo = styled.div`
  @media (max-width: 650px) {
    img {
      width: 50%;
      height: 50%;
    }
  }
`

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

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    align-items: center;

    h1 {
      margin-top: 1rem;
      text-align: center;
      width: 100%;
    }
  }
  @media (max-width: 900px) {
    margin-bottom: 3rem;
    img {
      width: 60%;
      height: 60%;
    }

    h1 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 650px) {
    margin-bottom: 2rem;
    h1 {
      font-size: 2rem;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .description {
    a {
      color: #fff;
    }
  }

  p {
    width: 450px;
    font-size: ${(props) => props.theme.typography.xMedium};
    line-height: 34px;
    font-weight: 600;
    margin-bottom: 16px;
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
      width: 125px;
    }
    .selectCity {
      background: #e44449;
      width: 280px;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;

    p {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 650px) {
    p {
      font-size: ${(props) => props.theme.typography.normal};
      line-height: 24px;
    }
    form {
      margin-top: 2rem;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      .selectState {
        width: 100%;
      }
      .selectCity {
        width: 100%;
      }

      button {
        align-self: self-end;
      }

      > div {
        width: 100%;
      }
    }
  }
`
