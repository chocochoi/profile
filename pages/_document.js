import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
          <meta name="description" content="next.js default setting" />
          <meta name="keywords" content="react, next" />
          <link rel="shortcut icon" href="../static/icon-smoker.png" />
          {/* <link rel="stylesheet" href="" /> 외부스타일시트 */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
