function simplifyApp() {
	var self = this;

	var cssDevCdn =
			"https://cdn.jsdelivr.net/gh/logmd/enhanced-jira-board@master/src/simplify-style.css",
		cssProdCdn =
			"https://cdn.jsdelivr.net/gh/logmd/enhanced-jira-board@510115ee/src/simplify-style.css",
		cssCdn = cssDevCdn;

	var addSimplifyButton = function() {
		$("#subnav-title").append(
			'<button id="slim-button" class="aui-button" onclick="simplify.onSimplifyClick()">slimify</button>'
		);
		console.log("slimify has been injected");

		var urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has("slimify")) onSlimifyClick();
	};

	var calculateTotalComplexity = function() {
		var columns = $("li[data-id]").map(function() {
			return $(this).attr("data-id");
		});

		columns.each(function(i, item) {
			console.log(item);

			var headerElement = $("[data-id='" + item + "'] h2");
			console.log(headerElement[0].innerText);

			var storyPoints = $(
				"[data-column-id='" + item + "'] [title='Story Points']"
			).map(function() {
				return this.innerText;
			});
			var sum = 0;

			storyPoints.each(function(i, item) {
				var parsedInt = parseInt(item);
				if (parsedInt) sum += parsedInt;
			});

			console.log(sum);

			headerElement.after(
				"<span class='column-total-complexity'>" + sum + "</span>"
			);
		});
	};

	var addIssueNumber = function() {
		$.each($(".js-key-link"), function(i, item) {
			var text = item.innerText;
			var reg = new RegExp("([^-]+$)");
			$(item)
				.parent()
				.parent()
				.append(
					"<span class='boring-issue-number'>" + reg.exec(text)[0] + "</span>"
				);
		});
	};

	var addStylesToDocument = function() {
		var head = document.getElementsByTagName("head")[0];
		var link = document.createElement("link");
		link.id = "slim-css";
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = cssCdn;
		link.media = "all";
		head.appendChild(link);
	};

	var hideHeader = function() {
		$("#jira").addClass("ghx-header-compact");
	};

	var onSimplifyClick = function() {
		hideHeader();
		addStylesToDocument();
		addIssueNumber();
		calculateTotalComplexity();
		console.log("slimify activated... refresh to reset state");
	};

	var init = function() {
		self.onSimplifyClick = onSimplifyClick;
		addSimplifyButton();
		$("#jira").removeClass("ghx-header-compact");
		console.log("simplify has initialised");
	};

	init();
}

var simplify = new simplifyApp();

console.log(simplify);
