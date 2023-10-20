// this is used to initialize all other pages
// shared layouts go here

import Head from 'next/head';

import '../styles/globals.scss';
import '../components/FeaturedsSlider/FeaturedsSlider.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A website full of articles. Somewhere you could spend all your time reading"
        />
        <title>Bloggie</title>
      </Head>
      {/* this is the active page and the props are initial props object passed to the page component (params and all that) */}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
