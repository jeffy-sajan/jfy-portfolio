const particles = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  size: 2 + Math.random() * 4,
  left: `${5 + Math.random() * 90}%`,
  top: `${5 + Math.random() * 90}%`,
  duration: 6 + Math.random() * 8,
  delay: Math.random() * 5,
  opacity: 0.06 + Math.random() * 0.1,
  drift: -20 + Math.random() * 40,
}));

const FloatingParticles = () => {
  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-dot"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
