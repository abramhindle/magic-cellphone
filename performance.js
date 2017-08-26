// This meant to move the performance automatically between stages.
var performTimeout;
function checkAndInstallPerformance(nextTime,nextNextURL) {
    var parsedUrl = new URL(window.location.href);
    if (parsedUrl.searchParams.has("action")) {
        if (parsedUrl.searchParams.get("action") === "perform") {
            var time = 1000*parseFloat(parsedUrl.searchParams.get("time"));
            var nextLocation = parsedUrl.searchParams.get("next");
            var params = new URLSearchParams();
            params.set("action","perform");
            params.set("time",nextTime);
            params.set("next",nextNextURL);
            var nextURL = nextLocation + "?" + params.toString();
            console.log("setting timeout to transition to " + nextURL + " in " + time  + " milliseconds");
            performTimeout = setTimeout(function() { window.location.href = nextUrl; }, time);
        }
    }
}
