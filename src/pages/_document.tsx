import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render(): JSX.Element {
    return (
      <Html lang='ja'>
        <Head>
          <meta charSet='utf-8' />
          <link
            rel='shortcut icon'
            href='/img/favicon2.ico?ver=1.0.0'
            type='image/x-icon'
            key={`shortcuticon`}
          />
          <link
            rel='apple-touch-icon'
            href='/img/apple-touch-icon2.ico?ver=1.0.1'
            type='image/x-icon'
            key={`apple-touch-icon`}
          />
          <link
            rel='apple-touch-icon-precomposed'
            href='/img/favicon2.png?ver=1.0.0'
            key='apple-touch-icon-precomposed'
          />
          <meta
            name='description'
            content='東京造形大学カイシゼミナール10期生。【2022/10/14-16】CS祭、体験型推理ゲーム「怪盗の夜宴」 旅客鉄道ゼニスに乗り込み、ミッションを遂行せよ！'
          />
          <meta property='og:locale' content='ja_JP' />
          <meta property='og:site_name' content='怪盗の夜宴' />
          <meta property='og:title' content='怪盗の夜宴' />
          <meta
            property='og:description'
            content='東京造形大学カイシゼミナール10期生。【2022/10/14-16】CS祭、体験型推理ゲーム「怪盗の夜宴」 旅客鉄道ゼニスに乗り込み、ミッションを遂行せよ！'
          />
          <meta property='og:url' content='https://www.kaitonoyaen.com' />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://www.kaitonoyaen.com/img/header/header_main.png?ver=1.0.0'
          />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='twitter:image'
            content='https://kaitonoyaen.com/img/header/header_main.png?ver=1.0.0'
          />
          <meta
            name='twitter:description'
            content='東京造形大学カイシゼミナール10期生。【2022/10/14-16】CS祭、体験型推理ゲーム「怪盗の夜宴」 旅客鉄道ゼニスに乗り込み、ミッションを遂行せよ！'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
