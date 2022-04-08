/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    backendURL: 'https://send-node-api.herokuapp.com/',
    frontendURL: 'https://nodesendclient-tawny.vercel.app/',
  }
}


module.exports = nextConfig