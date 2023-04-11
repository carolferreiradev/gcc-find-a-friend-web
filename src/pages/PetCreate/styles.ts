import styled from 'styled-components'

export const Container = styled.div`
  background: #fdeced;
  min-height: 100vh;

  display: flex;
`

export const Sidebar = styled.aside`
  width: 96px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f15156;
  justify-content: space-between;
  align-items: center;
  padding: 32px 25px;

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: #f4d35e;
    border-radius: 15px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Content = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 700px;
  max-height: 78vh;
  overflow-y: auto;
  margin-bottom: 100px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 60px;
  color: ${(props) => props.theme.palette.secondary};

  form {
    .group {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    h2 {
      font-size: 2rem;
      font-weight: 800;
      margin: 22px 0;
    }
  }
`

export const Divider = styled.div`
  background: #d3e2e5;
  height: 1px;
  width: 100%;
  margin: 24px 0;
`
export const Button = styled.button`
  background: #f4d35e;
  margin-top: 80px;
  border-radius: 20px;
  width: 100%;
  padding: 16px;
  border: none;
  font-weight: 800;
  font-size: 1.1rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
