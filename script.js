document.getElementById("run-code").addEventListener("click", function() {
    document.getElementById("run-code").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("message").classList.remove("hidden");
        launchConfetti();
    }, 3000);
});

document.getElementById("surprise").addEventListener("click", function() {
    document.getElementById("cake").classList.remove("hidden");
});

/* Функция для создания конфетти */
function launchConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
