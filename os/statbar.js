// Status bar drawer.
function drawStatBar() {
    
    // Prep and run if ready.
    var canvas = document.getElementById("display")
    if (canvas.getContext) {
        var context = canvas.getContext('2d')
        
        // Clear.
        context.clearRect(0, 0, window.innerWidth, 32)
    
        // Background.
        context.fillStyle = 'rgba(200, 200, 200, 0.25)'
        context.fillRect(0, 0, window.innerWidth, 30)
        
        // Bottom border.
        context.fillStyle = 'rgba(200, 200, 200, 0.125)'
        context.fillRect(0, 30, window.innerWidth, 1)
        
        // Set Text Style
        context.fillStyle = 'rgba(200, 200, 200, 1)'
        context.font = '20px Verdana'
        
        // Current application.
        context.fillText(currentApp, 7, 22)
        
        // Time.
        context.fillText(new Date().toLocaleTimeString(), window.innerWidth-102, 23)
    
    }
    
    // Do it again 10ms later.
    setTimeout(drawStatBar, 10)
    
}

setTimeout(drawStatBar, 100)