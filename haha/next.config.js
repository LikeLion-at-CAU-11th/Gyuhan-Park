/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents:
            true |
            {
                fileName: true,
                displayName: true,
                pure: true,
            },
    },
};

module.exports = nextConfig;
