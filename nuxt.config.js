const apiUrl =
	"http://ec2-13-229-122-67.ap-southeast-1.compute.amazonaws.com:5000/";
const host = "0.0.0.0";
export default {
	mode: "universal",
	server: {
		host: host
	},
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{
				charset: "utf-8"
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || ""
			}
		],
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico"
			}
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: "#fff"
	},
	/*
	 ** Global CSS
	 */
	css: ["~/assets/customstyling.scss"],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: ["nuxt-buefy", "@nuxt/http"],
	http: {
		proxy: true,
		prefix: "/api"
	},
	proxy: {
		"/api/": {
			target: apiUrl,
			pathRewrite: { "^/api/": "" }
		}
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {}
	}
};
