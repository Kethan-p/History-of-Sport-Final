import './Section3_Challenges.css';
import { initiatives, mediaAnalysis } from '../data/initiatives';


function Section3_Challenges() {
  const barriers = [
    {
      category: "Historical",
      icon: "📜",
      title: "Longstanding Exclusion",
      description: "Decades of male-only participation established norms and expectations that continue shaping who is seen as belonging in motorsport. These legacies limit women's presence and opportunities today.",
      details: [
        "75 years of male-dominated competition",
        "Few historical role models breaking through",
        "Institutional memory of exclusion and resistance to change"
      ]
    },
    {
      category: "Financial",
      icon: "💰",
      title: "Unequal Access to Sponsorship",
      description: "Racing requires massive financial backing. Because sponsors overwhelmingly support male drivers, women face structural disadvantages progressing through junior formulas and into F1.",
      details: [
        "Sponsorship bias favoring male prospects",
        "Lower media visibility reduces commercial appeal",
        "Families unable to self-fund early racing years"
      ]
    },
    {
      category: "Cultural",
      icon: "💭",
      title: "Gendered Assumptions About Ability",
      description: "Persistent stereotypes portray women as less suited for the physical and psychological demands of racing. These beliefs influence teams, sponsors, media, and grassroots entry points.",
      details: [
        "Misconceptions about physical strength and endurance",
        "Stereotypes around aggression and competitiveness",
        "Broader gender norms shaping who is encouraged to race"
      ]
    },
    {
      category: "Developmental Pathways",
      icon: "🏁",
      title: "Barriers in the Karting Pipeline",
      description: "The journey to F1 begins in childhood karting. Limited access to facilities, mentorship, and competitive opportunities creates early disadvantages that compound over time.",
      details: [
        "Fewer opportunities in youth karting ecosystems",
        "Lack of female peers, mentors, and community support",
        "Gaps in early training, competition, and visibility"
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

      <div className="media-section">
        <h3>Media Representation & Coverage</h3>
        <p className="section-intro">
          How women are represented in media significantly impacts their opportunities and public perception:
        </p>

        <div className="media-issues">
          <h4>Key Issues in Media Coverage</h4>
          <div className="issues-grid">
            {mediaAnalysis.coverage.map((item, index) => (
              <div key={index} className="issue-card">
                <h5>{item.issue}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="media-progress">
          <h4>Recent Progress</h4>
          <ul className="progress-list">
            {mediaAnalysis.progress.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="media-note">
          <p>
            <strong>The Visibility Cycle:</strong> More media coverage leads to more sponsorship opportunities, 
            which leads to better equipment and results, which leads to more coverage. Breaking into this cycle 
            is one of the biggest challenges facing women in motorsport.
          </p>
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
            <a href="https://www.womeninsport.org/research-and-advice/our-publications/where-are-all-the-women" target="_blank" rel="noopener noreferrer">
              <strong>Women in Sport (2018): Where Are All the Women? Media Visibility Report</strong>
            </a>
            <p className="source-description">
              Comprehensive research report examining the visibility of women's sport in the media, revealing 
              significant disparities in coverage and representation that impact sponsorship opportunities and 
              public perception of women athletes.
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
            <a href="https://journals.sagepub.com/doi/pdf/10.1177/0193723509350611" target="_blank" rel="noopener noreferrer">
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
        </div>
      </div>
    </div>
  );
}

export default Section3_Challenges;
