// Browser upgrade link.
function doBrowserUpgrade() {
    
    // Detect browser type.
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0
    var isFirefox = typeof InstallTrigger !== 'undefined'
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))
    var isIE = /*@cc_on!@*/false || !!document.documentMode
    var isEdge = !isIE && !!window.StyleMedia
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
    var isBlink = (isChrome || isOpera) && !!window.CS
    
    // Set the correct link.
    var link = 'https://www.wikihow.com/Update-Your-Browser'
    if (isOpera) link = 'https://www.opera.com/download'
    else if (isFirefox) link = 'https://www.mozilla.org/en-US/firefox/new/'
    else if (isSafari) link = 'https://support.apple.com/en-us/HT201541'
    else if (isIE) link = 'https://www.microsoft.com/en-us/download/internet-explorer.aspx'
    else if (isEdge) link = 'https://support.microsoft.com/en-us/help/4027667/windows-10-update'
    else if (isChrome) link = 'https://www.google.com/chrome/'
    else if (isBlink) link = 'https://www.chromium.org/blink'
    
    // Redirect to that new link.
    window.location.href = link
    
}

// Canvas sizing.
function sizeCanvas() {
    var canvas = document.getElementById("display")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
window.onresize = sizeCanvas
window.onload = sizeCanvas