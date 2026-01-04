/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'api.dicebear.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  i18n: {
    locales: [
      'en', 'de', 'fr', 'it', 'es', 'pt', 'nl', 
      'pl', 'ro', 'cs', 'hu', 'da', 'sv', 'no', 'fi'
    ],
    defaultLocale: 'en',
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'RisingGen',
    NEXT_PUBLIC_APP_URL: 'https://risinggen.org',
  },
}

module.exports = nextConfig
