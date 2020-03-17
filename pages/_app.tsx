import { AppProps } from 'next/app'
import '../static/global.scss';

function Portfolio({ Component, pageProps }: AppProps) {
  return <Component  {...pageProps} />
}

export default Portfolio