module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/css');

	return {
		dir: {
			input: 'src'
		}
	};
}