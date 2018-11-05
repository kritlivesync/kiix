import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { Gtag } from "../base/services";

export default class extends Document {

  render () {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/uikit.min.css" />
          <link rel="stylesheet" href="/static/css/main.css" />
          <script src="/static/js/uikit.min.js" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${Gtag.ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${Gtag.ID}');
          `}}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}