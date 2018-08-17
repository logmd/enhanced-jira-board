(function simplifyApp(){
var cssDevCdn = 'https://rawgit.com/logmd/enhanced-jira-board/master/src/simplify-style.css',
cssProdCdn = 'https://cdn.rawgit.com/logmd/enhanced-jira-board/510115ee/src/simplify-style.css',
cssCdn = cssDevCdn;


})()



function onSlimifyClick() {

    var calculateTotalComplexity = function() {
        var columns = $("li[data-id]").map(function() {
            return $(this).attr("data-id");
        });

        columns.each(function(i, item) {
            console.log(item);

            var headerElement = $("[data-id='" + item + "'] h2");
            console.log(headerElement[0].innerText);

            var storyPoints = $("[data-column-id='" + item + "'] [title='Story Points']").map(function() {
                return this.innerText
            })
            var sum = 0;

            storyPoints.each(function(i,item) {
				var parsedInt = parseInt(item);
				if(parsedInt) sum += parsedInt;
            });
			
            console.log(sum);

            headerElement.after("<span class='column-total-complexity'>" + sum + "</span>");
        })

    }

    var enableSwaggerMode = function() {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = 'slim-css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://cdn.rawgit.com/logmd/6e3071f77eb976ea9e8556a95d2b5b81/raw/2af2cd3bf23cf98525ead7317ab13288d7226842/jira-board-cleanup.css';
        link.media = 'all';
        head.appendChild(link);

        $.each($(".js-key-link"), function(i, item) {
            var text = item.innerText;
            var reg = new RegExp("([^-]+$)");
            $(item).parent().parent().append("<span class='boring-issue-number'>"+reg.exec(text)[0]+"</span>");
        })

        calculateTotalComplexity();

    }



    enableSwaggerMode();
    console.log("slimify activated... refresh to reset state");

}

$(document).ready(function() {
    $("#subnav-title").append('<button id="slim-button" class="aui-button" onclick="onSlimifyClick()">slimify</button>')
    console.log("slimify has been injected");

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('slimify')) onSlimifyClick();
})