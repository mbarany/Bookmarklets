Bookmarklets
============

JS Bookmarklets

Replace "FacePunch" with the name of your JS file.

    javascript:(function(){
      var bookmarklet = "FacePunch",
    		version = new Date().getTime(),
    		script = document.createElement("script");
    	script.type = "text/javascript";
    	script.src = "https://github.com/mbarany/Bookmarklets/blob/master/" + bookmarklet + ".js?v=" + version;
    	document.getElementsByTagName('head')[0].appendChild(script);
    })();