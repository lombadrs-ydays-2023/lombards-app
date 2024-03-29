import createPwaWrapper from 'next-pwa';
// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'));

const withPWA = createPwaWrapper({
  dest: 'public',
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

const _config =
  process.env.NODE_ENV === 'production' ? withPWA(config) : config;

export default _config;
