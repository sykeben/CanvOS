// Home app drawer.
function drawApp_Home() {
    
    // Prep and run if ready.
    var canvas = document.getElementById("display")
    if (canvas.getContext) {
        var context = canvas.getContext('2d')
        
        context.font = '12px Times New Roman'
        context.fillStyle = 'rgba(255, 255, 255, 1)'
        context.fillText('Hello, World!', 50, 50)
        
    }
    
}