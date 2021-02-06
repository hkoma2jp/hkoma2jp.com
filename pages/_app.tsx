import '../styles/global.css'
import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'

const AppComponent: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // Google Tag Manager
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KBCTQJ7' })
  }, [])

  return (
    <>
      <div className="wrap">
        <Component {...pageProps} />
      </div>
    </>
  )
}
export default AppComponent