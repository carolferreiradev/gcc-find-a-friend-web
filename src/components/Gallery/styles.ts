import styled, { css } from 'styled-components'

export const Container = styled.div``
export const CurrentImage = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 20px 20px 0 0;
`
export const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  padding: 0 72px;
  overflow-x: auto;
`

interface MiniatureProps {
  isCurrent: boolean
}
export const Miniature = styled.img<MiniatureProps>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 15px;

  ${(props) =>
    props.isCurrent
      ? css`
          border: 4px solid ${props.theme.palette.secondary};
        `
      : css`
          cursor: pointer;
          opacity: 0.5;
        `};
`
