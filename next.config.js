/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lomb-next-ecommerce.s3.amazonaws.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
