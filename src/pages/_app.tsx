import '../styles/globals.scss'
import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Auth } from '@/components/Navigation/Auth'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

import { ServiceSingleton } from 'services'
import { ServicesContext } from 'contexts/Services'
import { Provider } from 'react-redux'
import store from 'store'

const gbcColors = {
  red: '#d03236', // 208, 50, 54
  black: '#333333',
}

function MyApp({ Component, pageProps }: AppProps) {
    return <ServicesContext.Provider value={ServiceSingleton}>
        <Provider store={store}>
            <Head>
                <title>Give Back Cincinnati</title>
                <meta name='description' content="Give Back Cincinnati's Website" />
                <link rel="icon" href="/favicon-16x16.ico" sizes="16x16" />
                <link rel="icon" href="/favicon-32x32.ico" sizes="32x32" />
                <link rel="icon" href="/favicon-96x96.ico" sizes="96x96" />
            
            </Head>

            <Auth />

            <Navigation />

            <main style={{ paddingTop: 93, minHeight: 'calc(100vh - 93px)' }}>
                <Component {...pageProps} />
            </main>

            <Footer />
        </Provider>
    </ServicesContext.Provider>
}

export default MyApp