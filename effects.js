function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "fall 4s linear forwards";
    heart.style.pointerEvents = "none";   // QUAN TRỌNG
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
  
  setInterval(createHeart, 300);
  
  function launchConfetti() {
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement("div");
      confetti.style.position = "fixed";
      confetti.style.width = "8px";
      confetti.style.height = "8px";
      confetti.style.background =
        `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = "-10px";
      confetti.style.animation = "fall 3s linear forwards";
      confetti.style.pointerEvents = "none";   // QUAN TRỌNG
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }
  
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes fall {
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
  `;
  document.head.appendChild(style);
  
  
  
