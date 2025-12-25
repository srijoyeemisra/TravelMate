document.addEventListener("DOMContentLoaded", function () {
  const heartsContainer = document.querySelector('.hearts-container');
  if (!heartsContainer) {
    console.error('Hearts container not found');
    return;
  }

  const colors = ['💗','💜','💙','💚','💛','❤','💙'];

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = colors[Math.floor(Math.random() * colors.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (18 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (4 + Math.random() * 3) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }

  setInterval(createHeart, 400);
});