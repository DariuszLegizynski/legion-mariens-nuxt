/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
				pathname: "/**",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1",
				port: "1337",
				pathname: "/**",
			},
			// {
			// 	protocol: "http",
			// 	hostname: "89.58.8.55",
			// 	port: "1337",
			// 	pathname: "/**",
			// },
		],
	},
}

export default nextConfig

