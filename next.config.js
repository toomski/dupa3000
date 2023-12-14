const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx'],
    productionBrowserSourceMaps: true,
    compiler: {
        removeConsole: isProduction ? {exclude: ["error"]}: false,
    },
    experimental: {
        typedRoutes: true,
        mdxRs: true,
    },
}

module.exports = nextConfig
