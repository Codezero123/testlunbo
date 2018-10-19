 var html = document.getElementsByTagName("html")[0];
    var rootResize = function() {
    var winClient = document.documentElement.clientWidth;    
    var fontSize = winClient < 750 ? ((winClient / 750)*100) : 100;
    html.style.fontSize = fontSize + "px";
    }
    rootResize();
    window.onresize = function() {
    rootResize();
    }