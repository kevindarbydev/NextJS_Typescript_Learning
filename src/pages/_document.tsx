import { Html, Head, Main, NextScript } from 'next/document';
import { colors } from "../styles/styles.js";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
    <body style={{
      backgroundColor:colors.primaryGray,
        
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
