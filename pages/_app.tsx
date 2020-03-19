import { AppProps } from 'next/app'
import '../public/global.scss';
import '../public/buttons.scss';

function Portfolio({ Component, pageProps }: AppProps) {
  return <Component  {...pageProps} />
}

export default Portfolio