/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',  // enables static HTML export
  basePath: isProd ? '/My-Portfolio' : '',
  assetPrefix: isProd ? '/My-Portfolio/' : '',
}

module.exports = nextConfig
