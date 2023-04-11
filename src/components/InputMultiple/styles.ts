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
    margin-top: 12px;
  }

  .error-message {
    font-size: 0.8rem;
    color: #f15156;
    font-style: italic;
    text-transform: capitalize;
  }
`

export const ButtonPlus = styled.button`
  background: rgba(252, 134, 134, 0.1);
  border: 1px dashed #e44449;
  color: #e44449;
  border-radius: 10px;
  width: 100%;
  padding: 12px;
  font-weight: 800;
  transition: filter 0.2s;
  margin-top: 40px;

  &:hover {
    filter: brightness(0.9);
  }
`
