// Canvas setup for Matrix-style background
const canvas = document.getElementById("codeCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Enhanced programming terms for cybersecurity theme
const programmingTerms = [
    // Basic programming
    "const", "let", "var", "function", "return", "if", "else", "for", "while", "class",
    "import", "export", "async", "await", "try", "catch", "throw", "new", "this",
    
    // Cybersecurity specific
    "encrypt", "decrypt", "hash", "salt", "cipher", "ssl", "tls", "https", "firewall",
    "malware", "virus", "trojan", "phishing", "breach", "exploit", "vulnerability",
    "2FA", "MFA", "auth", "token", "jwt", "oauth", "session", "cookie", "xss", "csrf",
    "sql", "injection", "dos", "ddos", "mitm", "vpn", "proxy", "tor", "aes", "rsa",
    
    // Security functions
    "validate", "sanitize", "escape", "filter", "audit", "log", "monitor", "alert",
    "patch", "update", "backup", "restore", "secure", "protect", "defend", "guard",
    
    // Programming symbols and operators
    "=>", "===", "!==", "&&", "||", "++", "--", "+=", "-=", "*=", "/=", "%=",
    "true", "false", "null", "undefined", "NaN", "Infinity"
];

// Matrix effect configuration
const fontSize = 14;
const columns = Math.floor(window.innerWidth / fontSize);
const drops = Array(columns).fill(1);
const colors = ["#00ff41", "#00cc33", "#00aa22", "#008811", "#006600"];
const speeds = Array(columns).fill(0).map(() => Math.random() * 0.5 + 0.5);

// Character trails for more realistic effect
const trails = Array(columns).fill(0).map(() => []);

function drawMatrix() {
    // Create trailing effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = `${fontSize}px 'Courier New', monospace`;
    
    for (let i = 0; i < drops.length; i++) {
        // Random programming term
        const text = programmingTerms[Math.floor(Math.random() * programmingTerms.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Color variation with brightness
        const colorIndex = Math.floor(Math.random() * colors.length);
        ctx.fillStyle = colors[colorIndex];
        
        // Add glow effect occasionally
        if (Math.random() > 0.98) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = colors[colorIndex];
        } else {
            ctx.shadowBlur = 0;
        }
        
        // Draw the character
        ctx.fillText(text, x, y);
        
        // Update drop position with variable speed
        drops[i] += speeds[i];
        
        // Reset drop when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
            speeds[i] = Math.random() * 0.5 + 0.5; // New random speed
        }
    }
}

// Start the matrix animation
setInterval(drawMatrix, 50);

// Floating code snippets animation
function initFloatingCode() {
    const floatingElements = document.querySelector('.floating-elements');
    const codeSnippets = [
        'function authenticate(user) { return user.verified; }',
        'const security = new CyberDefense();',
        'if (password.strength < 8) throw new Error("Weak password");',
        'encrypt(data, key).then(result => store(result));',
        'firewall.block(suspiciousIP);',
        'user.enable2FA().catch(handleError);',
        'const hash = crypto.createHash("sha256");',
        'validateInput(userInput) || sanitize(userInput);',
        'logger.audit("Login attempt", {user, timestamp});',
        'session.destroy(); // Logout complete'
    ];
    
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance every interval
            const snippet = document.createElement('div');
            snippet.className = 'code-snippet';
            snippet.innerHTML = formatCodeSnippet(codeSnippets[Math.floor(Math.random() * codeSnippets.length)]);
            snippet.style.left = Math.random() * 80 + '%';
            snippet.style.animationDuration = (Math.random() * 10 + 15) + 's';
            
            floatingElements.appendChild(snippet);
            
            // Remove after animation
            setTimeout(() => {
                if (snippet.parentNode) {
                    snippet.parentNode.removeChild(snippet);
                }
            }, 25000);
        }
    }, 3000);
}

// Format code snippets with syntax highlighting
function formatCodeSnippet(code) {
    return code
        .replace(/\b(function|const|let|var|if|else|return|new|throw|catch|try|async|await)\b/g, '<span class="keyword">$1</span>')
        .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span class="function">$1</span>(')
        .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\b(?!\s*[(\.])/g, '<span class="variable">$1</span>')
        .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
        .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
}

// Binary rain effect (additional background element)
function createBinaryRain() {
    const binaryContainer = document.createElement('div');
    binaryContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    for (let i = 0; i < 50; i++) {
        const binary = document.createElement('div');
        binary.textContent = Math.random() > 0.5 ? '1' : '0';
        binary.style.cssText = `
            position: absolute;
            color: rgba(0, 255, 65, 0.3);
            font-family: 'Courier New', monospace;
            font-size: ${Math.random() * 10 + 10}px;
            left: ${Math.random() * 100}%;
            animation: binaryFall ${Math.random() * 10 + 5}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        binaryContainer.appendChild(binary);
    }
    
    document.body.appendChild(binaryContainer);
    
    // Add CSS animation for binary fall
    const style = document.createElement('style');
    style.textContent = `
        @keyframes binaryFall {
            0% { transform: translateY(-100px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize floating code
    initFloatingCode();
    
    // Initialize binary rain
    createBinaryRain();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // Intersection Observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Add random glitch effect to title
    const title = document.querySelector('h1.typewriter');
    setInterval(() => {
        if (Math.random() > 0.95) {
            title.style.textShadow = '2px 0 #ff0000, -2px 0 #00ffff';
            setTimeout(() => {
                title.style.textShadow = '0 0 10px #ff6a00, 0 0 20px #ff6a00aa, 0 0 30px #ff6a0044';
            }, 100);
        }
    }, 2000);
    
    // Typing sound effect simulation (visual only)
    const subtitle = document.querySelector('.subtitle');
    let originalText = subtitle.textContent;
    
    function typeEffect() {
        let i = 0;
        subtitle.textContent = '';
        const timer = setInterval(() => {
            subtitle.textContent += originalText.charAt(i);
            i++;
            if (i > originalText.length) {
                clearInterval(timer);
            }
        }, 50);
    }
    
    // Particle system for additional visual effects
    function createParticleSystem() {
        const particles = [];
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.1,
                color: Math.random() > 0.5 ? '#00bfff' : '#ff6a00'
            });
        }
        
        function animateParticles() {
            const particleCanvas = document.createElement('canvas');
            particleCanvas.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            `;
            particleCanvas.width = window.innerWidth;
            particleCanvas.height = window.innerHeight;
            document.body.appendChild(particleCanvas);
            
            const pCtx = particleCanvas.getContext('2d');
            
            function drawParticles() {
                pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
                
                particles.forEach(particle => {
                    pCtx.beginPath();
                    pCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    pCtx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
                    pCtx.fill();
                    
                    // Update particle position
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    
                    // Bounce off edges
                    if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
                    if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
                    
                    // Keep particles within bounds
                    particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
                    particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
                });
                
                requestAnimationFrame(drawParticles);
            }
            
            drawParticles();
        }
        
        animateParticles();
    }
    
    // Initialize particle system
    createParticleSystem();
    
    // Add cybersecurity-themed console messages
    console.log(`
    ╔═══════════════════════════════════════╗
    ║        CYBERSECURITY DASHBOARD        ║
    ╠═══════════════════════════════════════╣
    ║ Status: SECURE                        ║
    ║ Firewall: ACTIVE                      ║
    ║ Encryption: AES-256                   ║
    ║ 2FA: ENABLED                          ║
    ╚═══════════════════════════════════════╝
    `);
    
    console.log('%c🔒 InfoSpark Data Guardians - System Initialized', 'color: #00ff41; font-weight: bold; font-size: 14px;');
    console.log('%c⚡ All security protocols activated', 'color: #ff6a00; font-weight: bold;');
    
    // Add network scanning animation effect
    function createNetworkScanner() {
        const scannerLine = document.createElement('div');
        scannerLine.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ff41, transparent);
            z-index: 1000;
            animation: networkScan 8s linear infinite;
            pointer-events: none;
        `;
        
        document.body.appendChild(scannerLine);
        
        // Add scan animation CSS
        const scanStyle = document.createElement('style');
        scanStyle.textContent = `
            @keyframes networkScan {
                0% { transform: translateY(0); opacity: 1; }
                50% { opacity: 0.5; }
                100% { transform: translateY(100vh); opacity: 0; }
            }
        `;
        document.head.appendChild(scanStyle);
    }
    
    // Initialize network scanner
    setTimeout(createNetworkScanner, 2000);
    
    // Add hover effects for interactive elements
    document.querySelectorAll('.tip-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02) rotateX(5deg)';
            this.style.boxShadow = '0 15px 40px rgba(0, 191, 255, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        });
    });
    
    // Add loading simulation
    function simulateSystemLoad() {
        const loadingMessages = [
            'Initializing security protocols...',
            'Loading firewall configurations...',
            'Activating encryption algorithms...',
            'Establishing secure connections...',
            'System ready - All threats neutralized!'
        ];
        
        let messageIndex = 0;
        const loadingInterval = setInterval(() => {
            console.log(`%c[SYSTEM] ${loadingMessages[messageIndex]}`, 'color: #00bfff; font-family: monospace;');
            messageIndex++;
            
            if (messageIndex >= loadingMessages.length) {
                clearInterval(loadingInterval);
                console.log('%c[SYSTEM] 🛡️ InfoSpark Data Guardians - Fully Operational', 'color: #00ff41; font-weight: bold; font-size: 16px;');
            }
        }, 1000);
    }
    
    // Start loading simulation
    setTimeout(simulateSystemLoad, 3000);
    
    // Add Easter egg - Konami code
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter egg activated
                document.body.style.filter = 'hue-rotate(180deg)';
                console.log('%c🎉 EASTER EGG ACTIVATED! Color scheme inverted!', 'color: #ff0080; font-weight: bold; font-size: 20px;');
                
                setTimeout(() => {
                    document.body.style.filter = 'none';
                    console.log('%c🔄 System restored to normal.', 'color: #00ff41; font-weight: bold;');
                }, 5000);
                
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Add performance monitoring
    function monitorPerformance() {
        const start = performance.now();
        
        setInterval(() => {
            const memory = performance.memory ? performance.memory.usedJSHeapSize : 'N/A';
            const fps = Math.round(1000 / (performance.now() - start));
            
            console.log(`%c[PERFORMANCE] Memory: ${memory} bytes | FPS: ${fps}`, 'color: #feca57; font-family: monospace;');
        }, 30000); // Log every 30 seconds
    }
    
    // Start performance monitoring
    monitorPerformance();
    
    // Add random security alerts simulation
    function simulateSecurityAlerts() {
        const alerts = [
            '🔒 Password strength verified',
            '🛡️ Firewall blocking suspicious traffic',
            '🔐 Encryption key rotated successfully',
            '👁️ Monitoring network activity',
            '⚡ Security scan completed - No threats found'
        ];
        
        setInterval(() => {
            if (Math.random() > 0.7) {
                const alert = alerts[Math.floor(Math.random() * alerts.length)];
                console.log(`%c[SECURITY] ${alert}`, 'color: #00ff41; font-weight: bold; font-family: monospace;');
            }
        }, 15000);
    }
    
    // Start security alerts
    setTimeout(simulateSecurityAlerts, 10000);
    
    // Add dynamic title updates
    let titleIndex = 0;
    const titles = [
        'CYBERSECURITY - InfoSpark Data Guardians',
        '🔒 SECURE - InfoSpark Data Guardians',
        '🛡️ PROTECTED - InfoSpark Data Guardians',
        '⚡ ACTIVE - InfoSpark Data Guardians'
    ];
    
    setInterval(() => {
        document.title = titles[titleIndex];
        titleIndex = (titleIndex + 1) % titles.length;
    }, 5000);
});

// Add window focus/blur effects
window.addEventListener('focus', function() {
    console.log('%c[SYSTEM] 👁️ User attention detected - Full security mode', 'color: #00ff41; font-weight: bold;');
});

window.addEventListener('blur', function() {
    console.log('%c[SYSTEM] 😴 Entering low-power security mode', 'color: #feca57; font-weight: bold;');
});

// Add right-click context menu customization
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('%c[SECURITY] 🚫 Right-click disabled for security reasons', 'color: #ff6b9d; font-weight: bold;');
    
    // Create custom context menu
    const contextMenu = document.createElement('div');
    contextMenu.innerHTML = `
        <div style="
            position: fixed;
            top: ${e.clientY}px;
            left: ${e.clientX}px;
            background: rgba(0, 0, 0, 0.9);
            color: #00ff41;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #00ff41;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            z-index: 10000;
            pointer-events: none;
        ">
            🔒 SECURE MODE ACTIVE<br>
            🛡️ Content Protected
        </div>
    `;
    
    document.body.appendChild(contextMenu);
    
    setTimeout(() => {
        document.body.removeChild(contextMenu);
    }, 2000);
});

// Initialize everything when page loads
window.addEventListener('load', function() {
    console.log('%c[SYSTEM] 🚀 All systems loaded successfully!', 'color: #00ff41; font-weight: bold; font-size: 18px;');
});

const passwordInput = document.getElementById('passwordInput');
const strengthDisplay = document.getElementById('strengthLevel');
const crackDisplay = document.getElementById('crackTime');
const toggleEye = document.getElementById('toggleEye');
const strengthBar = document.getElementById('strengthBar');

// Entropy calculation
function calculateEntropy(password) {
  let charset = 0;
  if (/[a-z]/.test(password)) charset += 26;
  if (/[A-Z]/.test(password)) charset += 26;
  if (/[0-9]/.test(password)) charset += 10;
  if (/[^a-zA-Z0-9]/.test(password)) charset += 32;
  return password.length * Math.log2(charset || 1);
}

// Estimate time to crack
function estimateCrackTime(entropy) {
  const guesses = Math.pow(2, entropy);
  const guessesPerSec = 1e9;
  const seconds = guesses / guessesPerSec;

  if (seconds < 60) return `${seconds.toFixed(2)} seconds`;
  if (seconds < 3600) return `${(seconds / 60).toFixed(2)} minutes`;
  if (seconds < 86400) return `${(seconds / 3600).toFixed(2)} hours`;
  if (seconds < 31536000) return `${(seconds / 86400).toFixed(2)} days`;
  return `${(seconds / 31536000).toFixed(2)} years`;
}

// Score strength 1-10
function getStrength(entropy) {
  if (entropy < 20) return 1;
  if (entropy < 30) return 2;
  if (entropy < 40) return 3;
  if (entropy < 50) return 4;
  if (entropy < 60) return 5;
  if (entropy < 70) return 6;
  if (entropy < 80) return 7;
  if (entropy < 90) return 8;
  if (entropy < 100) return 9;
  return 10;
}

// Update on input
passwordInput?.addEventListener('input', () => {
  const val = passwordInput.value;
  if (!val) {
    strengthDisplay.textContent = 'Strength Level: -';
    crackDisplay.textContent = 'Estimated Crack Time: -';
    strengthBar.style.width = '0%';
    return;
  }

  const entropy = calculateEntropy(val);
  const strength = getStrength(entropy);

  strengthDisplay.textContent = `Strength Level: ${strength} / 10`;
  crackDisplay.textContent = `Estimated Crack Time: ${estimateCrackTime(entropy)}`;
  strengthBar.style.width = `${strength * 10}%`;

  if (strength <= 3) {
    strengthBar.style.backgroundColor = 'red';
  } else if (strength <= 6) {
    strengthBar.style.backgroundColor = 'orange';
  } else {
    strengthBar.style.backgroundColor = 'limegreen';
  }
});

// Toggle eye icon
toggleEye?.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  toggleEye.textContent = type === 'password' ? '👁️' : '🙈';
});
