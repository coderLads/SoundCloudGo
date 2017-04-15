(function() {

    const remote = require('electron').remote;

    function init() {
        document.getElementById("back-btn").addEventListener("click", function(e) {
            document.getElementById("main-view").goBack();
        });
        document.getElementById("min-btn").addEventListener("click", function(e) {
            const window = remote.getCurrentWindow();
            window.minimize();
        });

        document.getElementById("max-btn").addEventListener("click", function(e) {
            const window = remote.getCurrentWindow();
            if (!window.isMaximized()) {
                window.maximize();
            } else {
                window.unmaximize();
            }
        });

        document.getElementById("close-btn").addEventListener("click", function(e) {
            const window = remote.getCurrentWindow();
            window.close();
        });
        document.getElementById("stream-btn").addEventListener("click", function(e) {
            document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('header__mainMenu-loggedInHome header__mainMenu-stream')[0].click()")
        });

        document.getElementById("profile-btn").addEventListener("click", function(e) {
            document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('userNav__button userNav__usernameButton')[0].click(); document.getElementsByClassName('profileMenu__link profileMenu__profile')[0].click()")
        });

        document.getElementById("like-btn").addEventListener("click", function(e) {
            document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('userNav__button userNav__usernameButton')[0].click(); document.getElementsByClassName('profileMenu__link profileMenu__likes')[0].click()")
        });

        document.getElementById("follow-btn").addEventListener("click", function(e) {
            document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('userNav__button userNav__usernameButton')[0].click(); document.getElementsByClassName('profileMenu__link profileMenu__following')[0].click()")
        });

        document.getElementById("playlist-btn").addEventListener("click", function(e) {
            document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('userNav__button userNav__usernameButton')[0].click(); document.getElementsByClassName('profileMenu__link profileMenu__sets')[0].click()")
        });
        document.getElementById("main-view").executeJavaScript("document.getElementById('app').getElementsByTagName('header')[0].style.display = 'none'");
        document.getElementById("main-view").executeJavaScript("document.getElementById('app').style.marginTop = '-70px'");

    }

    document.onreadystatechange = function() {
        if (document.readyState == "complete") {
            init();
            setTimeout(function() {
                document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('sc-toggle-handle')[0].click()");
                document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('sc-button-play playButton sc-button m-stretch')[0].click()");
            }, 3000);
        }
    };


    document.getElementById("main-view").addEventListener("did-stop-loading", function() { // runs on navigation complete
        document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('collectionNav g-tabs g-tabs-large')[0].style.display = 'none'");
        document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('streamExploreTabs')[0].style.display = 'none'");
        document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('dropbar__content')[0].style.marginTop = '-50px'");
    });

    /*progress bar wip

    setInterval(function() {
        var maxTime = parseInt(document.getElementById("main-view").executeJavaScript('document.getElementsByClassName("playbackTimeline__progressWrapper")[0].getAttribute("aria-valuemax")'));
        var currentTime = Math.floor(parseInt(document.getElementById("main-view").executeJavaScript('document.getElementsByClassName("playbackTimeline__progressWrapper")[0].getAttribute("aria-valuenow")')));
        console.log(currentTime + " " + maxTime);
        console.log(maxTime / currentTime);
    }, 1000);
    */

})();