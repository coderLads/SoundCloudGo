(function () {
  
  const remote = require('electron').remote;

  function init() {
    document.getElementById("back-btn").addEventListener("click", function (e) {
        document.getElementById("main-view").goBack();
    });
    document.getElementById("min-btn").addEventListener("click", function (e) {
      const window = remote.getCurrentWindow();
      window.minimize();
    });

    document.getElementById("max-btn").addEventListener("click", function (e) {
      const window = remote.getCurrentWindow();
      if (!window.isMaximized()) {
        window.maximize();
      } else {
        window.unmaximize();
        }
      });
      
      document.getElementById("close-btn").addEventListener("click", function (e) {
        const window = remote.getCurrentWindow();
        window.close();
      });
      document.getElementById("stream-btn").addEventListener("click", function (e) {
        document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('header__mainMenu-loggedInHome header__mainMenu-stream')[0].click()")
      });

      document.getElementById("profile-btn").addEventListener("click", function (e) {
        document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('userNav__button userNav__usernameButton')[0].click(); document.getElementsByClassName('profileMenu__link profileMenu__profile')[0].click()")
      });

      document.getElementById("like-btn").addEventListener("click", function (e) {
        document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('userNav__button userNav__usernameButton')[0].click(); document.getElementsByClassName('profileMenu__link profileMenu__likes')[0].click()")
      });

      document.getElementById("follow-btn").addEventListener("click", function (e) {
        document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('userNav__button userNav__usernameButton')[0].click(); document.getElementsByClassName('profileMenu__link profileMenu__following')[0].click()")
      });

      document.getElementById("playlist-btn").addEventListener("click", function (e) {
        document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('userNav__button userNav__usernameButton')[0].click(); document.getElementsByClassName('profileMenu__link profileMenu__sets')[0].click()")
      });
      /*
      document.getElementById("stats-btn").addEventListener("click", function (e) {
        document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('userNav__button userNav__usernameButton')[0].click(); document.getElementsByClassName('profileMenu__link profileMenu__')[0].click()")
      });*/
    };

    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        init();
      }
    };
    
    

})();