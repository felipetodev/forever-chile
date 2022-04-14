import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://use.typekit.net/qii7ovl.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
}
