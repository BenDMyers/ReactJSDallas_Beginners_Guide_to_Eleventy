const fetch = require('node-fetch');

module.exports = function() {
	return fetch('https://api.github.com/repos/BenDMyers/ReactJSDallas_Beginners_Guide_to_Eleventy/stargazers')
		.then(res => res.json())
		.then(res => res.map(stargazer => stargazer.login));
}