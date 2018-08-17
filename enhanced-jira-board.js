$(document).ready(function() {
	var jsDevCdn =
			"https://rawgit.com/logmd/enhanced-jira-board/master/src/simplify-app.js",
		jsProdCdn =
			"https://cdn.rawgit.com/logmd/enhanced-jira-board/510115ee/src/simplify-app.js",
		jsCdn = jsDevCdn;

	var loadJs = function() {
		var script = document.createElement("script");
		script.src = jsCdn;

		console.log();
		console.log(script);

		document.head.appendChild(script);
	};

	loadJs();
});
 