import './Hero.css';

function Hero({ onNavigate }) {
  return (
    <div className="hero">
      <div className="racing-track-bg">
        <svg className="track-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          {/* Main racing track lines */}
          <path
            className="track-line track-line-1"
            d="M 0,400 Q 200,300 400,350 T 800,400 T 1200,450 T 1600,400 T 1920,350"
            fill="none"
            stroke="rgba(255, 51, 51, 0.7)"
            strokeWidth="4"
          />
          <path
            className="track-line track-line-2"
            d="M 0,500 Q 250,400 500,450 T 900,500 T 1300,550 T 1700,500 T 1920,450"
            fill="none"
            stroke="rgba(255, 51, 51, 0.6)"
            strokeWidth="3"
          />
          <path
            className="track-line track-line-3"
            d="M 0,600 Q 300,500 600,550 T 1000,600 T 1400,650 T 1800,600 T 1920,550"
            fill="none"
            stroke="rgba(255, 51, 51, 0.5)"
            strokeWidth="3"
          />

          {/* Speed lines/stripes */}
          <g className="speed-lines">
            <line className="speed-line" x1="0" y1="380" x2="150" y2="380" stroke="rgba(255, 51, 51, 0.5)" strokeWidth="3" />
            <line className="speed-line" x1="200" y1="420" x2="350" y2="420" stroke="rgba(255, 51, 51, 0.5)" strokeWidth="3" />
            <line className="speed-line" x1="400" y1="480" x2="550" y2="480" stroke="rgba(255, 51, 51, 0.5)" strokeWidth="3" />
            <line className="speed-line" x1="600" y1="520" x2="750" y2="520" stroke="rgba(255, 51, 51, 0.5)" strokeWidth="3" />
            <line className="speed-line" x1="800" y1="580" x2="950" y2="580" stroke="rgba(255, 51, 51, 0.5)" strokeWidth="3" />
            <line className="speed-line" x1="1000" y1="620" x2="1150" y2="620" stroke="rgba(255, 51, 51, 0.5)" strokeWidth="3" />
            <line className="speed-line" x1="1200" y1="680" x2="1350" y2="680" stroke="rgba(255, 51, 51, 0.5)" strokeWidth="3" />
            <line className="speed-line" x1="1400" y1="720" x2="1550" y2="720" stroke="rgba(255, 51, 51, 0.5)" strokeWidth="3" />
            <line className="speed-line" x1="1600" y1="780" x2="1750" y2="780" stroke="rgba(255, 51, 51, 0.5)" strokeWidth="3" />
            <line className="speed-line" x1="1800" y1="820" x2="1950" y2="820" stroke="rgba(255, 51, 51, 0.5)" strokeWidth="3" />
          </g>

          {/* Additional curved track elements */}
          <path
            className="track-line track-line-4"
            d="M 0,300 Q 150,250 300,280 T 600,300 T 900,320 T 1200,300 T 1500,280 T 1920,300"
            fill="none"
            stroke="rgba(255, 51, 51, 0.4)"
            strokeWidth="2.5"
          />
        </svg>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">WHY ARE THERE SO FEW WOMEN IN FORMULA ONE?</h1>
        <p className="hero-subtitle">
          In 75 years of Formula One, only <strong>5 women</strong> have ever raced. The last was in <strong>1976</strong>, nearly 50 years ago.
          This isn't coincidence. It's the result of <strong>interconnected barriers</strong>, such as financial inequality, cultural stereotypes,
          and historical exclusion. This website explores how these forces work together to maintain one of sport's most persistent gender gaps.
        </p>
        <div className="hero-cta">
          <button className="cta-button" onClick={() => onNavigate('overview')}>
            Explore the Story →
          </button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
}

export default Hero;
