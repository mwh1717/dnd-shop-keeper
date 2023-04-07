import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalHeader from './GlobalHeader'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className='pageWrapper w-full max-w-screen-2xl mx-auto bg-orange-50 min-h-screen'>
    <GlobalHeader />
    <Component {...pageProps} />
  </div>
  ) 
}
