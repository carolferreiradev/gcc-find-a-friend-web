import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string
      primary500: string
      secondary: string
      tertiary: string
      text: string
    }
    typography: {
      xLarger: string
      xMedium: string
      medium: string
      normal: string
    }
  }
}
