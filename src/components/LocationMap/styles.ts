import styled from 'styled-components'

export const LocationContainer = styled.div`
  margin-top: 60px;
  background: #0d3b66;
  border-radius: 20px;
  margin-bottom: 30px;
  .leaflet-container {
    border-radius: 20px;
    height: 227px;
    width: 100%;
  }

  .leaflet-control-attribution {
    display: none;
  }

  .btn-google-maps {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: #f4d35e;
      font-weight: 700;
      text-decoration: none;
      font-size: 1.1rem;
      border: none;
      background: transparent;
    }
  }
`
