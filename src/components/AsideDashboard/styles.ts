import styled from 'styled-components'

export const Container = styled.aside`
  width: 392px;
  height: 100vh;
  background-color: #f15156;
`

export const AsideHeader = styled.div`
  background-color: #e44449;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const AsideContent = styled.div`
  height: calc(100vh - 241px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 35px 56px;
`

export const ContentHeader = styled.h1`
  font-size: 20px;
  line-height: 34px;
  margin-bottom: 27px;
`

export const ContentFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ul {
    list-style: none;

    li {
      margin-bottom: 8px;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.7);
      }
      a {
        text-decoration: none;
        color: #ffff;
      }
    }
  }
`
