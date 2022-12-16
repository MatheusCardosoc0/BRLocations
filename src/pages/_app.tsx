import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layaut from '../Layaut/Layaut'
import { UseContextProvider } from '../context/UseDataContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseContextProvider>
      <Layaut>
        <Component {...pageProps} />
      </Layaut>
    </UseContextProvider>
  )
}

export default MyApp
