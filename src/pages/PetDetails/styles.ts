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
  margin-bottom: 100px;
  background-color: #ffffff;
  border-radius: 20px;
  color: ${(props) => props.theme.palette.secondary};

  .content {
    padding: 72px;
  }
  a {
    text-decoration: none;
  }
`

export const Title = styled.h2`
  font-size: 3.375rem;
  font-weight: 800;
  margin-bottom: 16px;
`
export const Description = styled.p`
  font-size: ${(props) => props.theme.typography.medium};
  margin-bottom: 43px;
`

export const Divider = styled.div`
  background: #d3e2e5;
  height: 1px;
  width: 100%;
`
export const Contact = styled.div`
  margin: 50px 0;
  display: flex;
  gap: 18px;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background: #f27006;
    width: 64px;
    height: 64px;
  }

  .address-contact {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.875rem;
      font-weight: 700;
    }
    span {
      font-size: 1rem;
      font-weight: 600;
    }

    .phone {
      color: #0d3b66;
      font-size: 1.125rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      gap: 9px;
      height: 54px;
      margin-top: 16px;
      background: rgba(13, 59, 102, 0.1);
    }
  }
`

export const AdoptionRequests = styled.div`
  h3 {
    margin-bottom: 40px;
    font-size: 1.875rem;
    font-weight: 700;
  }

  margin: 50px 0;
`

export const WhatsAppButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: #ffff;
  width: 100%;
  border: none;
  height: 64px;
  margin-top: 50px;
  border-radius: 20px;
  background-color: #3cdc8c;
`
