import './Section3_Challenges.css';

function Section3_Challenges() {
  const barriers = [
    {
      category: "Historical",
      icon: "📜",
      title: "Longstanding Exclusion",
      description: "Decades of tradition and institutional norms have created a culture where women's participation is seen as exceptional rather than expected. The sport's history itself becomes a barrier.",
      details: [
        "73 years of male-dominated culture",
        "Lack of role models and pathways",
        "Institutional memory of exclusion"
      ]
    },
    {
      category: "Financial",
      icon: "💰",
      title: "Unequal Access to Sponsorship",
      description: "Racing is expensive. Young drivers need hundreds of thousands—often millions—in sponsorship to progress through karting, junior formulas, and into F1. Women face greater difficulty securing these funds.",
      details: [
        "Sponsors prefer male drivers",
        "Lower media visibility = less sponsorship appeal",
        "Self-funding barriers for families"
      ]
    },
    {
      category: "Cultural",
      icon: "🌍",
      title: "Gendered Assumptions About Skill",
      description: "Deep-seated stereotypes suggest women lack the physical strength, aggression, or mental toughness required for elite racing. These assumptions affect opportunities at every level.",
      details: [
        "Perceived lack of physical strength",
        "Stereotypes about aggression and competitiveness",
        "Social expectations and gender roles"
      ]
    },
    {
      category: "Physical",
      icon: "🏎️",
      title: "Access to Karting Circuit",
      description: "The path to F1 starts young—often in karting by age 8-10. Limited access to karting facilities, teams, and competitions creates an early bottleneck that compounds over time.",
      details: [
        "Fewer opportunities in youth karting",
        "Lack of female peers and mentors",
        "Early development pathway gaps"
      ]
    }
  ];

  return (
    <div className="section-challenges">
      <p className="challenges-intro">
        Multiple interconnected barriers have prevented women from reaching Formula One. 
        These factors overlap and reinforce each other, creating a system that's difficult to break into.
      </p>

      <div className="barriers-grid">
        {barriers.map((barrier, index) => (
          <div key={index} className="barrier-card">
            <div className="barrier-header">
              <span className="barrier-icon">{barrier.icon}</span>
              <div>
                <span className="barrier-category">{barrier.category}</span>
                <h3 className="barrier-title">{barrier.title}</h3>
              </div>
            </div>
            <p className="barrier-description">{barrier.description}</p>
            <ul className="barrier-details">
              {barrier.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="overlap-section">
        <h3>The Overlap Problem</h3>
        <p>
          These barriers don't exist in isolation. A young girl interested in racing faces:
        </p>
        <ul className="overlap-list">
          <li><strong>Historical barriers</strong> mean fewer role models and established pathways</li>
          <li><strong>Cultural assumptions</strong> make it harder to secure <strong>financial sponsorship</strong></li>
          <li><strong>Limited karting access</strong> prevents early development, reinforcing <strong>cultural stereotypes</strong></li>
          <li>Each barrier strengthens the others, creating a cycle that's difficult to break</li>
        </ul>
        <p className="research-note">
          Research on women in autoracing identifies four key themes that reveal the complexity of these barriers: 
          (1) entry into racecar driving often requires family and fatherly influence, creating early gatekeeping; 
          (2) marginalizing beliefs, behaviors, and industry barriers systematically exclude women; 
          (3) navigating the space requires constant negotiation of gender with both empowering and disempowering effects; 
          and (4) promoting girls and women requires systemic change at multiple levels.
        </p>
      </div>

      <div className="future-section">
        <h3>Future Possibilities</h3>
        <div className="future-grid">
          <div className="future-item">
            <h4>F1 Academy & Development Programs</h4>
            <p>New initiatives like F1 Academy provide dedicated pathways for women drivers, offering funding and visibility previously unavailable.</p>
          </div>
          <div className="future-item">
            <h4>Changing Perceptions</h4>
            <p>As more women succeed in motorsport (W Series, Formula E), cultural assumptions are slowly shifting.</p>
          </div>
          <div className="future-item">
            <h4>Early Intervention</h4>
            <p>Programs targeting young girls in karting aim to address the development pathway gap from the start.</p>
          </div>
          <div className="future-item">
            <h4>Media & Visibility</h4>
            <p>Increased coverage of women in motorsport helps attract sponsors and change public perception.</p>
          </div>
        </div>
      </div>

      <div className="sources-section">
        <h3>Sources & Further Reading</h3>
        <div className="sources-list">
          <div className="source-item">
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S1469029220308232?via%3Dihub" target="_blank" rel="noopener noreferrer">
              <strong>Kochanek et al. (2020): Professional Women Racecar Drivers' Agency in Motorsport</strong>
            </a>
            <p className="source-description">
              Research examining how professional women racecar drivers navigate and assert agency within motorsport, 
              revealing that women are "more than just a driver" and must constantly negotiate their identity and 
              position within a male-dominated sport.
            </p>
          </div>
          <div className="source-item">
            <a href="https://journals.lww.com/acsm-msse/Fulltext/2019/12000/Physiological_Responses_of_Male_and_Female_Race.18.aspx" target="_blank" rel="noopener noreferrer">
              <strong>Ferguson et al. (2019): Physiological Responses of Male and Female Race Car Drivers</strong>
            </a>
            <p className="source-description">
              Scientific study comparing physiological responses of male and female race car drivers during competition, 
              providing evidence that challenges assumptions about physical differences and their impact on racing performance.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S1469029220308232?via%3Dihub" target="_blank" rel="noopener noreferrer">
              <strong>Women in Autoracing: Navigating Gender, Barriers, and Opportunities</strong>
            </a>
            <p className="source-description">
              This research reveals four key themes in women's experiences in autoracing: (1) entry into racecar 
              driving through family and fatherly influence; (2) marginalizing beliefs, behaviors, and industry 
              barriers; (3) navigating the space through negotiating gender and its (dis)empowering effects; and 
              (4) promoting girls and women in autoracing. The study reveals various dimensions of sexism and 
              sportswomen's agentic experiences.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S1469029218302008" target="_blank" rel="noopener noreferrer">
              <strong>Gentile et al. (2018): Gender Stereotype Threat in Physical and Sport Activities</strong>
            </a>
            <p className="source-description">
              Meta-analysis examining the effects of gender stereotype threat on women's performance in physical and 
              sport activities, showing how stereotypes can negatively impact performance and create self-fulfilling 
              prophecies in competitive settings.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.independent.co.uk/sport/motor-racing/bernie-ecclestone-centre-sexism-row-after-claiming-women-drivers-wouldnt-be-taken-seriously-a6816456.html" target="_blank" rel="noopener noreferrer">
              <strong>de Menezes (2016): Bernie Ecclestone Sexism Controversy</strong>
            </a>
            <p className="source-description">
              News coverage of former F1 CEO Bernie Ecclestone's comments suggesting women drivers wouldn't be taken 
              seriously, highlighting the cultural barriers and sexist attitudes that persist at the highest levels of 
              Formula One management.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.dailyrecord.co.uk/news/scottish-news/no-time-formula-1-champion-10061906" target="_blank" rel="noopener noreferrer">
              <strong>Houston (2017): David Coulthard Comments on Women in F1</strong>
            </a>
            <p className="source-description">
              Coverage of former F1 driver David Coulthard's controversial comments about women's physical capabilities 
              in Formula One, including references to the "mothering gene" and assumptions about women's suitability 
              for elite racing.
            </p>
          </div>
          <div className="source-item">
            <a href="https://journals.sagepub.com/doi/abs/10.1177/0193723509345541" target="_blank" rel="noopener noreferrer">
              <strong>Pflugfelder (2009): Gendered Bodies in Motorsport</strong>
            </a>
            <p className="source-description">
              Analysis of how motorsport constructs gendered bodies and spaces, examining how the sport positions women 
              as "something less than a driver" and the implications for women's participation and recognition.
            </p>
          </div>
          <div className="source-item">
            <a href="https://journals.sagepub.com/doi/full/10.1177/13505068221094204" target="_blank" rel="noopener noreferrer">
              <strong>Critical Examination of Women's Participation in Formula One</strong>
            </a>
            <p className="source-description">
              A comprehensive analysis of the structural barriers preventing women's participation in Formula One, 
              examining how historical exclusion, financial inequalities, cultural assumptions, and physical barriers 
              intersect to create persistent underrepresentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3_Challenges;
