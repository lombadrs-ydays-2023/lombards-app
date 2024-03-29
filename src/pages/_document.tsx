import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/icon.png'></link>
          <meta name='theme-color' content='#fff' />
        </Head>
        <body className='min-h-screen'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
