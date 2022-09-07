import Head from 'next/head';

import '../styles/globals.scss';
import '../components/FeaturedsSlider/FeaturedsSlider.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A website full of articles. Somewhere you can spend all your time reading"
        />
        <title>Bloggie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
