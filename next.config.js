/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  reactStrictMode: true,
  future: { webpack5: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, module: false }
    }

    return config
  },
  // Configure PostCSS
  postcssLoaderOptions: {
    ident: 'postcss',
    plugins: [
      'postcss-flexbugs-fixes',
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      },
    ],
  },
}
