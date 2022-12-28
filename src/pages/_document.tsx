import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <meta name='theme-color' content='#18181b' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icon-192.png' />
          <link rel='shortcut icon' href='/favicon.svg' type='svg/x-icon' />
          <link rel='icon' href='/favicon.svg' type='svg/x-icon' />
          <link rel='manifest' href='/manifest.json' />
          {process.env.NODE_ENV === 'production' && (
            <Script
              async
              defer
              strategy='afterInteractive'
              data-do-not-track='true'
              // please change to your data website id
              data-website-id='ed4514ff-0629-43ad-bff0-5bba16e9f785'
              // change to your hosted umami app
              src='https://umami.taufikcrisnawan.dev/umami.js' 
              />
          )}
          {process.env.NODE_ENV === 'production' && (
            <script
              async
              // please change to u data
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9254295768355301"
              crossOrigin="anonymous">
            </script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
