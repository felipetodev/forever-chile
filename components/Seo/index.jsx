import Head from "next/head";

import { META } from "./config";

const SeoLayout = ({ canonical, children }) => (
  <>
    <Head>
      <link href={META.favicon} rel="icon" />
      <link href={META.appleicon} rel="apple-touch-icon" />
      <link href={canonical} rel="canonical" />
      <title>{META.title}</title>
      <meta content={META.theme} name="theme-color" />
      <meta content={META.description} name="description" />
      <meta content={META.keywords} name="keywords" />
      <meta content={META.author} name="author" />
      {/* <meta content={META.fbapp} property="fb:app_id" /> */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={META.twitter} name="twitter:site" />
      <meta content={META.twitter} name="twitter:creator" />
      <meta content={META.title} name="twitter:title" />
      <meta content={META.description} name="twitter:description" />
      <meta content={META.banner?.url} property="twitter:image" />
      <meta content={META.author} property="og:site_name" />
      <meta content={META.url} property="og:url" />
      <meta content="website" property="og:type" />
      <meta content={META.title} property="og:title" />
      <meta content={META.description} property="og:description" />
      <meta content={META.banner?.url} property="og:image" />
      <meta content={META.banner?.url} property="og:image:url" />
      <meta content={META.banner?.format} property="og:image:type" />
      <meta content={META.banner?.width} property="og:image:width" />
      <meta content={META.banner?.height} property="og:image:height" />
      <meta content={META.title} property="og:image:alt" />
    </Head>
    {children}
  </>
);

export default SeoLayout;
