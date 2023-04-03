import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  background: #fdeced;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    width: 50vw !important;
    height: 50vh !important;
  }

  span {
    color: #0d3b66;
  }
`
