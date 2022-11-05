import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import '../styles/globals.css';
import "../styles/blog.css";
import SeoHead from "../src/components/seoComponents/seoHead";
import {specialTitle, titelCreater} from "../src/components/seoComponents/seoTitles"
//import SeoHead from "../src/components/seoComponents/seoHead";
//import {specialTitle, titelCreater} from "../src/components/seoComponents/seoTitles"
//So importierst Du css Styles. --> import "../styles/consoleLogDesignCss.css"
import createEmotionCache from '../src/createEmotionCache';
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { AppWrapper } from "../src/appContext";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const {...appProps} = props

  {/* Google Analytic & Tag Manager - Page Route base code */}
  const router = useRouter()
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
      if(url === "/preis") {gtag.event()}
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
          <AppWrapper>
            <SeoHead
                canonicalUrl={appProps.router.pathname}
                title={specialTitle[appProps.router.pathname] ? specialTitle[appProps.router.pathname] : titelCreater(router.pathname)}
              />
              {/* Google Tag Manager - Global base code */}
              <Script
                id="gtag-base"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
                  `,
                }}
              />
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />
              <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
                <Component {...pageProps} />
        </AppWrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
