import { drivers } from '../data/drivers';
import './Section2_Profiles.css';

function Section2_Profiles() {
  return (
    <div className="section-profiles">
      <p className="profiles-intro">
        Throughout Formula One's 75-year history, only five women have ever raced in a Grand Prix,
        and just one has scored championship points. Here are their stories:
      </p>

      <div className="timeline">
        {drivers.map((driver, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="driver-card">
              <div className="driver-header">
                <h3>{driver.name}</h3>
                <span className="driver-years">{driver.years}</span>
              </div>
              <div className="driver-stats">
                <span className="stat-badge">{driver.races} {driver.races === 1 ? 'Race' : 'Races'}</span>
              </div>
              <p className="driver-achievement"><strong>{driver.achievements}</strong></p>
              <p className="driver-description">{driver.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="profiles-note">
        <p>
          <strong>Note:</strong> The last woman to race in a Grand Prix was Lella Lombardi in 1976, nearly 50 years ago.
          Since then, only Susie Wolff has participated in official F1 sessions (practice), but no woman has started a race.
        </p>
      </div>

      <div className="sources-section">
        <h3>Sources & Further Reading</h3>
        <div className="sources-list">
          <div className="source-item">
            <a href="https://go.gale.com/ps/i.do?p=CPI&u=duke_perkins&id=GALE%7CA426080476&v=2.1&it=r&sid=summon" target="_blank" rel="noopener noreferrer">
              <strong>Old Boys' Club? Women Are Making Strides in Formula One But Still Have Not Made a Starting Grid in 40 Years</strong>
            </a>
            <p className="source-description">
              This article examines the persistent absence of women from Formula One's starting grid despite
              decades of progress in other areas of the sport. It highlights how women have made significant
              strides in engineering, management, and support roles, yet remain excluded from the driver's seat,
              pointing to deeper structural barriers within the "old boys' club" culture of motorsport.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.bbc.co.uk/sport/formula1/18332772" target="_blank" rel="noopener noreferrer">
              <strong>Barretto (2012): Where are all the female Formula 1 racing drivers?</strong>
            </a>
            <p className="source-description">
              BBC Sport analysis questioning the absence of women drivers in Formula One, examining the historical
              context and barriers that have prevented women from competing at the highest level of motorsport.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.huffingtonpost.co.uk/susie-wolff/susie-wolff-retired_b_8461408.html" target="_blank" rel="noopener noreferrer">
              <strong>Wolff (2015): Time to Hang Up the Helmet</strong>
            </a>
            <p className="source-description">
              Susie Wolff's personal account of her retirement from Formula One, reflecting on her experiences as
              the first woman in 22 years to participate in F1 weekend sessions and the challenges she faced
              throughout her career.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.fia.com/women-through-decades" target="_blank" rel="noopener noreferrer">
              <strong>Fédération Internationale de l'Automobile: Women Through the Decades</strong>
            </a>
            <p className="source-description">
              Official FIA documentation providing historical records of women who have participated in Formula One,
              including detailed profiles and achievements of the few women who have raced in Grand Prix events.
            </p>
          </div>
          <div className="source-item">
            <a href="https://journals.sagepub.com/doi/full/10.1177/13505068221094204" target="_blank" rel="noopener noreferrer">
              <strong>Hitting the barriers – Women in Formula 1 and W series racing</strong>
            </a>
            <p className="source-description">
              Historical analysis of the few women who have competed in Formula One, examining their achievements,
              challenges, and the systemic barriers they faced. The study provides context for understanding why
              women's participation has remained so limited throughout the sport's history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2_Profiles;
