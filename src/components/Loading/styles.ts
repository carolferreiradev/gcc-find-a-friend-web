import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  background: rgba(253, 237, 238, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    width: 100px !important;
    height: 100px !important;
  }

  span {
    color: #0d3b66;
  }
`
