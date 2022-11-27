import SeoLayout from "../components/Seo";
import { GlobalStyles } from "../styles/globals";

function MyApp({ Component, pageProps, canonical }) {
  return (
    <>
      <GlobalStyles />
      <SeoLayout canonical={canonical}>
        <div className="app">
          <Component {...pageProps} />
        </div>
      </SeoLayout>
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({ ctx }) => {
  const baseUrl = 'https://www.forever-chile.com'
  const { asPath } = ctx
  const canonical = baseUrl + asPath

  return {
    canonical
  }
}
