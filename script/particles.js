(() => {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const config = {
        count: 60,
        speed: 0.15,
        maxSize: 1.5,
        lineDistance: 80,
        lineOpacity: 0.15,
        particleColor: 'rgba(241, 238, 218, 0.3)'
    };

    let particles = [];
    let width = 0;
    let height = 0;
    let devicePixelRatio = window.devicePixelRatio || 1;

    const resize = () => {
        devicePixelRatio = window.devicePixelRatio || 1;
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    const random = (min, max) => Math.random() * (max - min) + min;

    const initParticles = () => {
        particles = Array.from({ length: config.count }, () => ({
            x: random(0, width),
            y: random(0, height),
            vx: random(-config.speed, config.speed),
            vy: random(-config.speed, config.speed),
            size: random(0.5, config.maxSize)
        }));
    };

    const draw = () => {
        ctx.clearRect(0, 0, width, height);

        // draw particles
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = config.particleColor;
            ctx.fill();
        });

        // draw subtle connecting lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const a = particles[i];
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < config.lineDistance) {
                    const alpha = (1 - dist / config.lineDistance) * config.lineOpacity;
                    ctx.strokeStyle = `rgba(241, 238, 218, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }
    };

    const step = () => {
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            // wrap around edges smoothly
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;
        });

        draw();
        requestAnimationFrame(step);
    };

    const handleResize = () => {
        resize();
        initParticles();
    };

    resize();
    initParticles();
    requestAnimationFrame(step);
    window.addEventListener('resize', handleResize);
})();
