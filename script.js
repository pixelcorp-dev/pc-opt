// --- Custom Premium Trailing Cursor Engine ---
const dot = document.querySelector('.custom-cursor-dot');
const outline = document.querySelector('.custom-cursor-outline');

window.addEventListener('mousemove', (e) => {
    // Immediate precise dot layout positioning
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    
    // Delayed animation trailing positioning ring
    outline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    }, { duration: 240, fill: "forwards" });
});

// Cursor Scaling Interaction Effects on hover loops
document.querySelectorAll('.premium-btn, .premium-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        outline.style.width = '45px';
        outline.style.height = '45px';
        outline.style.borderColor = item.classList.contains('cyan-btn') || item.querySelector('.cyan-theme') ? '#00f0ff' : '#9d4edf';
    });
    item.addEventListener('mouseleave', () => {
        outline.style.width = '30px';
        outline.style.height = '30px';
        outline.style.borderColor = '#9d4edf';
    });
});

// --- Dynamic Fluid Particles Ambient Map ---
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
        this.speedY = -Math.random() * 0.4 - 0.1; // Smooth upwards drift execution
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

function loop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
}
loop();

// --- Cinematic Terminal Log Sequencing ---
const viewport = document.getElementById('terminal-output');

function runLogStream(messages) {
    viewport.innerHTML = "";
    messages.forEach((msg, idx) => {
        setTimeout(() => {
            const row = document.createElement('div');
            row.style.marginBottom = '6px';
            row.innerHTML = `<span style="color:#9d4edf;">&raquo;</span> ${msg}`;
            viewport.appendChild(row);
        }, idx * 350);
    });
}

function runDebloater() {
    runLogStream([
        "CONNECTING TO NETWORK MANIFEST DEBLOAT ARRAY...",
        "ANALYZING HOST ENVIRONMENT ACTIVE CLUSTERS...",
        "STAGING DISMISSAL STRATEGIES FOR BACKGROUND OEM TELEMETRY...",
        "REDIRECTING SYSTEM REQUEST TO SECURE MIRROR NODE."
    ]);
}

function runOptimiser() {
    runLogStream([
        "CONNECTING TO NETWORK MANIFEST OPTIMIZATION ARRAY...",
        "SCANNING REGISTRY SCHEDULER CHANNELS & MEMORY HOOKS...",
        "CONFIGURING BALANCED THROTTLING ALLOCATIONS...",
        "REDIRECTING SYSTEM REQUEST TO SECURE MIRROR NODE."
    ]);
}