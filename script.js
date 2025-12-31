setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "18px";
  heart.style.transition = "top 4s linear, opacity 4s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.top = "-10vh";
    heart.style.opacity = 0;
  }, 100);

  setTimeout(() => heart.remove(), 4000);
}, 600);
