import '@/styles/normalize.css'
import '@/styles/sass/globales.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
