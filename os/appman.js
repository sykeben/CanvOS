// Set the app to the homescreen.
var currentApp = 'Home'

// App drawer.
function drawApp(newApp) {
    
    try {
        eval(`drawApp_${newApp}()`)
    } catch(err) {
        console.error(`Application ${newApp} not found: ${err.toString()}`)
    }
    
}

window.onresize = function() {
    drawApp(currentApp)
}

window.onload = function() {
    drawApp(currentApp)
}