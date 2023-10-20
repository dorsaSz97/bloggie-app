// this file is only rendered on the server

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* common head data between all pages (not title then) and its different from the one we add to each individual page */}
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          {/* nothing outside this main will be initialized by the browser */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
