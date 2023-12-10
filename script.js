window.onresize = function() {
    let container = document.getElementById("myform");
    const minScale = 0.75;
    const maxScale = 1;
    let scale = Math.min(window.innerWidth / (container.offsetWidth + 8),
            window.innerHeight / (container.offsetHeight + 8));
    scale = Math.min(maxScale, Math.max(minScale, scale))
    document.documentElement.style.setProperty("--trickyScale", scale);
}