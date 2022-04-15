import { GlobalStyles } from "../styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <div className="app">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
