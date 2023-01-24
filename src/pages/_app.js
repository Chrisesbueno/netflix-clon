import "../styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Netflix</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
