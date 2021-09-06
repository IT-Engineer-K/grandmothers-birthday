(function confettiAnime() {
    confetti({
        origin: {
            x: Math.random(),
            y: 0
        },
        ticks: 1000,
    })
    setTimeout(function() {
        requestAnimationFrame(confettiAnime)
    }, 1000)
})()