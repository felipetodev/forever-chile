import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
