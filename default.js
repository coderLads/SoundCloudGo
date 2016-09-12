(function () {
  
  const remote = require('electron').remote;
  
  function init() {
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

      document.getElementById("like-btn").addEventListener("click", function (e) {
        document.getElementById("main-view").executeJavaScript(getElementsByClassName("profileMenu__likes")[0].click())
      });

      document.getElementById("playlist-btn").addEventListener("click", function (e) {
        document.getElementById("main-view").loadURL("https://soundcloud.com/you/sets")
      });

      document.getElementById("friend-btn").addEventListener("click", function (e) {
        document.getElementById("main-view").loadURL("https://soundcloud.com/you/following")
      });
    };

    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        init();
      }
    };
    
    

})();