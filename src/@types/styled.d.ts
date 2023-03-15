import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string
      secondary: string
      tertiary: string
      text: string
    }
  }
}
