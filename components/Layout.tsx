import * as React from 'react'
import Head from 'next/head'
import Navbar from './navbar/navbar'
import '../public/global.scss'
import '../public/buttons.scss'
import Footer from './footer/footer';

type Props = {
  title?: string,
  container: boolean
}
const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Home | Robert Nordgren', container }) => (
    <div className="app">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar />
      </header>
      <body>
        <div className={container == true ? "container" : ""}>
          {children}
        </div>
      </body>
      <Footer />
    </div>
  )

export default Layout
