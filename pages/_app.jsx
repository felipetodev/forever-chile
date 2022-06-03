import SeoLayout from "../components/Seo";
import { GlobalStyles } from "../styles/globals";

function MyApp({ Component, pageProps }) {
  const { page } = pageProps;
  return (
    <>
      <GlobalStyles />
      <SeoLayout section={page?.slug?.toUpperCase()}>
        <div className="app">
          <Component {...pageProps} />
        </div>
      </SeoLayout>
    </>
  );
}

export default MyApp;
