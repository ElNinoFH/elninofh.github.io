// Matrix background effect
function createMatrix() {
    const matrix = document.getElementById('matrix');
    const chars = '01000101 01110011 01100011 01100001 01110000 01100101 00100000 01010100 01101000 01100101 00100000 01001101 01100001 01110100 01110010 01101001 01111000';

    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';

        let text = '';
        for (let j = 0; j < 20; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;

        matrix.appendChild(column);
    }
}

// Typing effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize effects
document.addEventListener('DOMContentLoaded', function() {
    createMatrix();

    // Typing effect for subtitle
    const subtitle = document.querySelector('.typing-text');
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 150);

    // Smooth scrolling for navigation
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Copy wallet address function
function copyAddress() {
  const address = document.getElementById('wallet-address').textContent;
  navigator.clipboard.writeText(address).then(() => {
    const btn = document.querySelector('.copy-btn');
    const originalText = btn.textContent;
    btn.textContent = '✓';
    btn.style.background = '#00ff41';
    btn.style.color = '#000';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = 'transparent';
      btn.style.color = '#00ff41';
    }, 2000);
  }).catch(() => {
    alert('Address copied: ' + address);
  });
}


// Random matrix refresh
setInterval(() => {
    const columns = document.querySelectorAll('.matrix-column');
    columns.forEach(column => {
        if (Math.random() < 0.1) {
            const chars = '01000101 01110011 01100011 01100001 01110000 01100101 00100000 01010100 01101000 01100101 00100000 01001101 01100001 01110100 01110010 01101001 01111000';
            let text = '';
            for (let j = 0; j < 20; j++) {
                text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
            }
            column.innerHTML = text;
        }
    });
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");
});
