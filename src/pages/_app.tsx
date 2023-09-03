import '@/styles/general.css'
import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {Mulish} from 'next/font/google'
import {Provider} from '@/GlobalRedux/provider'

const font = Mulish({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({Component, pageProps}: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? (page => page)
  const layout = getLayout(<Component {...pageProps} />)
  
  return (
    <div className={font.className}>
      <Provider>
        {layout}
      </Provider>
    </div>
  )
}