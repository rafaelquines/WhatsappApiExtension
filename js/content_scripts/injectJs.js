function injectJs(link) {
    // alert('to no inject');
    var scr = document.createElement("script");
    scr.type = "text/javascript";
    scr.src = link;
    (document.head || document.body || document.documentElement).appendChild(scr);
}