window.onresize = function() {
    let container = document.getElementById("card");
    const minScale = 1;
    const maxScale = 0.75;
    let scale = Math.min(window.innerWidth / (container.offsetWidth + 8),
            window.innerHeight / (container.offsetHeight + 8));
    scale = Math.min(maxScale, Math.max(minScale, scale))
    document.documentElement.style.setProperty("--trickyScale", scale);
}
