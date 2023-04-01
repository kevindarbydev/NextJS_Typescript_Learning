import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
    <body style={{
        background: "linear-gradient(45deg, #000F00, #808080, #ddffdd, #2F2F2F)",
        minHeight: "100vh"
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
