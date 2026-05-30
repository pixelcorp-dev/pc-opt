// --- Custom Premium Trailing Cursor Engine ---
const dot = document.querySelector('.custom-cursor-dot');
const outline = document.querySelector('.custom-cursor-outline');

window.addEventListener('mousemove', (e) => {
    // Precise instantaneous dot positioning
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    
    // Smooth frame trailing outline ring
    outline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    }, { duration: 240, fill: "forwards" });
});

// Cursor Interactions for Premium Interactive Layout Elements
document.querySelectorAll('.premium-btn, .premium-card, .discord-btn').forEach(item => {
    item.addEventListener('mouseenter', () => {
        outline.style.width = '45px';
        outline.style.height = '45px';
        
        // Dynamically match outline color to current targeted brand
        if (item.classList.contains('discord-btn')) {
            outline.style.borderColor = '#5865F2';
        } else if (item.classList.contains('cyan-btn') || item.querySelector('.cyan-theme')) {
            outline.style.borderColor = '#00f0ff';
        } else {
            outline.style.borderColor = '#9d4edf';
        }
    });
    item.addEventListener('mouseleave', () => {
        outline.style.width = '30px';
        outline.style.height = '30px';
        outline.style.borderColor = '#9d4edf';
    });
});

// --- Dynamic Ambient Starfield Canvas Engine ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class AmbientParticle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.2;
        this.speedY = -Math.random() * 0.4 - 0.1; // Elegant cosmic drifting upward
        this.alpha = Math.random() * 0.4 + 0.1;
    }
    update() {
        this.y += this.speedY;
        if (this.y < 0) this.reset();
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#9d4edf';
        ctx.fill();
        ctx.restore();
    }
}

for(let i=0; i < 50; i++) { particles.push(new AmbientParticle()); }

function renderLoop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(renderLoop);
}
renderLoop();

// --- Cinematic Terminal Diagnostic Feeds ---
const viewport = document.getElementById('terminal-output');

function runLogStream(messages) {
    viewport.innerHTML = "";
    messages.forEach((msg, idx) => {
        setTimeout(() => {
            const row = document.createElement('div');
            row.style.marginBottom = '6px';
            row.innerHTML = `<span style="color:#9d4edf;">&raquo;</span> ${msg}`;
            viewport.appendChild(row);
            viewport.scrollTop = viewport.scrollHeight;
        }, idx * 350);
    });
}

function runDebloater() {
    runLogStream([
        "CONNECTING TO REMOTE TELEMETRY DEBLOAT ARCHIVE...",
        "ANALYZING ACTIVE HOST ENVIRONMENT NT-KERNEL THREADS...",
        "STAGING TERMINATION PROTOCOLS FOR BACKGROUND OEM SERVICES...",
        "HANDSHAKE COMPLETE. REDIRECTING USER SAFELY TO SECURE GATEWAY HUB."
    ]);
}

function runOptimiser() {
    runLogStream([
        "CONNECTING TO CLOUD CONFIGURATION REGISTER STACK...",
        "SCANNING REGISTRY SCHEDULER MATRIX & MEMORY ALLOCATION FLAGS...",
        "CALCULATING DPC LATENCY BALANCING COEFFICIENTS...",
        "HANDSHAKE COMPLETE. REDIRECTING USER SAFELY TO SECURE GATEWAY HUB."
    ]);
}
