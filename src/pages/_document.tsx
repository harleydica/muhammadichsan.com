import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

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
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9254295768355301"
              crossOrigin="anonymous">
            </script>
      
          )}

             <script
              async
              defer
              strategy='afterInteractive'
              data-do-not-track='true'
              // please change to your data website id
              data-website-id='4bfe1718-9cc9-4831-836f-98d894cc7631'
              // change to your hosted umami app
              src='https://umami.taufikcrisnawan.dev/umami.js'>
              </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
