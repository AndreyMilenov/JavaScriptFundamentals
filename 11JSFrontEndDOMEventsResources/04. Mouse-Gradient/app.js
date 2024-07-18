function attachGradientEvents() {
    const hoverBar = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    hoverBar.addEventListener('mousemove', function (event) {
        const currentWidth = event.offsetX
        const elementWidth = event.target.clientWidth;
        const progres = Math.floor((currentWidth / elementWidth) * 100)
        
        resultElement.textContent = `${progres}%`
        
    });
}