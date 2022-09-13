import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  console.log("executed");
  return <Component {...pageProps} />
}

export default MyApp
