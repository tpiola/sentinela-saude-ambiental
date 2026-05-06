import { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    // Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXXX');
    `;
    document.head.appendChild(gtmScript);

    // Google Analytics 4
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(gaScript);

    const gaConfig = document.createElement('script');
    gaConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `;
    document.head.appendChild(gaConfig);

    // Schema JSON-LD
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://sentinelasaudeambiental.com.br/#org",
          "name": "Sentinela Saúde Ambiental",
          "description": "Controle de pragas urbanas em Franca SP. Escorpiões, baratas, cupins, roedores e higienização de reservatórios.",
          "telephone": "+55-16-99374-7147",
          "url": "https://sentinelasaudeambiental.com.br",
          "image": "https://sentinelasaudeambiental.com.br/logo-sentinelatransparente.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Franca",
            "addressRegion": "SP",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -20.5386,
            "longitude": -47.4008
          },
          "areaServed": [
            { "@type": "City", "name": "Franca" },
            { "@type": "City", "name": "Batatais" },
            { "@type": "City", "name": "Cristais Paulista" },
            { "@type": "City", "name": "Orlândia" },
            { "@type": "City", "name": "Ituverava" },
            { "@type": "City", "name": "São Joaquim da Barra" }
          ],
          "openingHours": ["Mo-Sa 07:00-19:00", "Su 08:00-17:00"],
          "sameAs": [
            "https://instagram.com/sentinelasaudeambiental",
            "https://facebook.com/sentinelasaudeambiental"
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "O que o escorpião come?",
              "acceptedAnswer": {
                "@type": "Answer",
              "text": "Escorpiões podem se alimentar de insetos, incluindo baratas. A avaliação do ambiente considera abrigo, umidade, frestas, entulho e presença de outros insetos."
              }
            },
            {
              "@type": "Question",
              "name": "Qual o período de escorpião em Franca SP?",
              "acceptedAnswer": {
                "@type": "Answer",
              "text": "O risco costuma aumentar em períodos quentes e úmidos. A orientação correta depende das condições do imóvel e do entorno."
              }
            },
            {
              "@type": "Question",
              "name": "Quanto custa dedetização em Franca SP?",
              "acceptedAnswer": {
                "@type": "Answer",
              "text": "O valor depende da praga, tamanho do local, nível de infestação, acesso e necessidade de retorno. Residências, empresas e condomínios são avaliados sob consulta."
              }
            }
          ]
        }
      ]
    });
    document.head.appendChild(schema);

    // Meta tags
    const metaTags = [
      { name: 'description', content: 'Controle técnico de pragas em Franca SP. Escorpião, baratas, cupim, roedores e higienização de reservatórios.' },
      { name: 'keywords', content: 'dedetização Franca SP, controle de pragas, escorpião, baratas, cupim, roedores, caixa d\'água, sanitização, desratização' },
      { property: 'og:title', content: 'Sentinela Saúde Ambiental | Controle de Pragas Franca SP' },
      { property: 'og:description', content: 'Controle técnico de pragas em Franca SP e região.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://sentinelasaudeambiental.com.br' },
      { property: 'og:image', content: 'https://sentinelasaudeambiental.com.br/hero-casa-protegida.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow' },
      { name: 'geo.region', content: 'BR-SP' },
      { name: 'geo.placename', content: 'Franca' },
      { name: 'geo.position', content: '-20.5386;-47.4008' },
      { name: 'ICBM', content: '-20.5386, -47.4008' },
    ];
    metaTags.forEach(tag => {
      const el = document.createElement('meta');
      Object.entries(tag).forEach(([key, value]) => el.setAttribute(key, value));
      document.head.appendChild(el);
    });

    // Title
    document.title = 'Sentinela Saúde Ambiental | Controle de Pragas Franca SP';

    return () => {
      document.head.removeChild(gtmScript);
      document.head.removeChild(gaScript);
      document.head.removeChild(gaConfig);
      document.head.removeChild(schema);
    };
  }, []);

  return null;
}
