import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  label {
    font-weight: 600;
    font-size: 1rem;
    color: #0d3b66;
  }

  input {
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 10px;
    padding: 12px;
  }

  span {
    font-size: 0.8rem;
    color: #f15156;
    font-style: italic;
    text-transform: capitalize;
  }
`
