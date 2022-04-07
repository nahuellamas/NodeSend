/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL: 'http://localhost:4500',
    frontendURL: 'http://localhost:3000',
  }
}

module.exports = nextConfig
