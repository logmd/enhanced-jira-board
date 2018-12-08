$(document).ready(function() {
	var jsDevCdn =
			"https://cdn.jsdelivr.net/gh/logmd/enhanced-jira-board@master/src/simplify-app.js",
		jsProdCdn =
			"https://cdn.jsdelivr.net/gh/logmd/enhanced-jira-board@510115ee/src/simplify-app.js",
		jsCdn = jsDevCdn;

	var loadJs = function() {
		var script = document.createElement("script");
		script.src = jsCdn;
		document.head.appendChild(script);
	};

	loadJs();
});
 