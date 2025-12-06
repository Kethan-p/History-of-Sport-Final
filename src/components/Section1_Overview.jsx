import './Section1_Overview.css';

function Section1_Overview() {
  return (
    <div className="section-overview">
      <div className="overview-text">
        <h3>What is Formula One?</h3>
        <p>
          Formula One is the pinnacle of motorsport—a global racing championship featuring the fastest cars, 
          most skilled drivers, and largest audiences in the world. With races across five continents and 
          viewership in the hundreds of millions, F1 represents the ultimate stage for automotive excellence.
        </p>
        
        <h3>Why Representation Matters</h3>
        <p>
          Despite its global reach and influence, Formula One has remained overwhelmingly male-dominated. 
          Only a handful of women have ever competed at the highest level, and none have raced in decades. 
          This absence isn't just about numbers—it reflects deeper barriers that prevent talented women 
          from reaching the sport's elite tier.
        </p>
        <p>
          Research examining women's participation in Formula One reveals that the sport's structure, 
          culture, and institutional practices have systematically excluded women, creating what scholars 
          describe as a "gendered space" where masculine norms dominate both on and off the track.
        </p>
      </div>

      <div className="video-section">
        <h3>Understanding the Challenge</h3>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/mkZtadrk2gs?start=8"
            title="Women in Formula One"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="youtube-video"
          ></iframe>
        </div>
      </div>
      
      <div className="overview-stats">
        <div className="stat-card">
          <div className="stat-number">75</div>
          <div className="stat-label">Years of F1 History</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5</div>
          <div className="stat-label">Women Who Have Raced</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">0</div>
          <div className="stat-label">Women on Current Grid</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">1.5B+</div>
          <div className="stat-label">Global Viewers</div>
        </div>
      </div>

      <div className="sources-section">
        <h3>Sources & Further Reading</h3>
        <div className="sources-list">
          <div className="source-item">
            <a href="https://journals.sagepub.com/doi/full/10.1177/13505068221094204" target="_blank" rel="noopener noreferrer">
              <strong>Critical Examination of Women's Participation in Formula One</strong>
            </a>
            <p className="source-description">
              A comprehensive academic analysis exploring the structural, cultural, and institutional barriers 
              that have prevented women from achieving equal participation in Formula One. This study examines 
              how gendered assumptions, sponsorship inequalities, and historical exclusion have shaped the sport's 
              current landscape.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.fia.com/women-through-decades" target="_blank" rel="noopener noreferrer">
              <strong>Fédération Internationale de l'Automobile: Women Through the Decades</strong>
            </a>
            <p className="source-description">
              Official FIA documentation tracing the history of women's participation in motorsport, providing 
              historical context and recognition of women's contributions throughout Formula One's history.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.tandfonline.com/doi/full/10.1080/09523367.2016.1168811" target="_blank" rel="noopener noreferrer">
              <strong>Matthews & Pike (2016): Understanding Women in Motorsport</strong>
            </a>
            <p className="source-description">
              Academic research examining the historical and contemporary experiences of women in motorsport, 
              exploring the question "What on earth are they doing in a racing car?" and analyzing the barriers 
              and opportunities for women in the sport.
            </p>
          </div>
          <div className="source-item">
            <a href="https://journals.sagepub.com/doi/abs/10.1177/0193723509345541" target="_blank" rel="noopener noreferrer">
              <strong>Pflugfelder (2009): Gendered Bodies in Motorsport</strong>
            </a>
            <p className="source-description">
              Scholarly analysis of how motorsport constructs gendered bodies and spaces, examining how the 
              sport positions women as "something less than a driver" and the implications for women's participation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1_Overview;
