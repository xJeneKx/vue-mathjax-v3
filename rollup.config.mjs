import vue from "rollup-plugin-vue";

export default {
	input: "./src/index.mjs",
	output: [{
		file: "lib/index.js",
		format: "es",
	}],
	external: ["vue"],
	plugins: [
		vue(),
	],
}
