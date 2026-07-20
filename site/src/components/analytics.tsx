"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { INTEGRATIONS } from "@/lib/integrations";

const CONSENT_KEY = "sentinela-cookie-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Mensuração com consentimento: GTM (preferencial), GA4 standalone,
 * Google Ads e Meta Pixel só carregam após aceite.
 */
export function Analytics() {
  const [allowed, setAllowed] = useState(false);
  const { gtmId, gaMeasurementId, googleAdsId, metaPixelId } = INTEGRATIONS;

  useEffect(() => {
    const sync = () => setAllowed(localStorage.getItem(CONSENT_KEY) === "accepted");
    sync();
    window.addEventListener("sentinela:consent", sync);
    return () => window.removeEventListener("sentinela:consent", sync);
  }, []);

  if (!allowed) return null;

  const googleId = gaMeasurementId || googleAdsId;

  return (
    <>
      {gtmId ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      ) : googleId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
            strategy="afterInteractive"
          />
          <Script id="google-measurement" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());${gaMeasurementId ? `gtag('config','${gaMeasurementId}',{send_page_view:true});` : ""}
${googleAdsId ? `gtag('config','${googleAdsId}');` : ""}`}
          </Script>
        </>
      ) : null}

      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${metaPixelId}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
