import { initiatives, mediaAnalysis } from '../data/initiatives';
import './Section4_Initiatives.css';

function Section4_Initiatives() {
  return (
    <div className="section-initiatives">
      <div className="initiatives-section">
        <h3>Current Initiatives & Programs</h3>
        <p className="section-intro">
          Several programs are working to break down barriers and create pathways for women in Formula One:
        </p>

        <div className="initiatives-grid">
          {initiatives.map((initiative, index) => (
            <div key={index} className="initiative-card">
              <div className="initiative-header">
                <h4>{initiative.name}</h4>
                <span className={`initiative-status ${initiative.status.toLowerCase()}`}>
                  {initiative.status}
                </span>
              </div>
              <p className="initiative-description">{initiative.description}</p>
              <div className="initiative-impact">
                <strong>Impact:</strong> {initiative.impact}
              </div>
            </div>
          ))}
        </div>
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
            <a href="https://wseries.com/about-the-w-series/" target="_blank" rel="noopener noreferrer">
              <strong>W Series (2021): About W Series</strong>
            </a>
            <p className="source-description">
              Official information about W Series, an all-female racing championship designed to provide opportunities 
              and pathways for women drivers, including details about its mission, structure, and impact on women's 
              participation in motorsport.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.espn.com.au/f1/story/_/id/26655581/why-controversial-w-series-deserves-chance-make-difference" target="_blank" rel="noopener noreferrer">
              <strong>Saunders (2019): Why Controversial W Series Deserves a Chance</strong>
            </a>
            <p className="source-description">
              Analysis of the W Series initiative, addressing both its potential benefits for women in motorsport and 
              the controversies surrounding gender-segregated racing, examining whether such initiatives advance or 
              hinder gender equality in Formula One.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.autosport.com/f1/news/ferraris-female-driver-push-not-a-marketing-plan-w-series-ceo-4984514/4984514/" target="_blank" rel="noopener noreferrer">
              <strong>Cooper (2020): Ferrari's Female Driver Push</strong>
            </a>
            <p className="source-description">
              Coverage of Ferrari's initiative to promote female drivers, including their junior program efforts and 
              the debate over whether such initiatives represent genuine commitment or marketing strategies.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.autosport.com/f1/news/ferrari-seeks-to-add-female-drivers-to-formula-1-junior-programme-4984760/4984760/" target="_blank" rel="noopener noreferrer">
              <strong>Mitchell (2019): Ferrari Seeks to Add Female Drivers to F1 Junior Programme</strong>
            </a>
            <p className="source-description">
              News report on Ferrari's announcement of plans to include female drivers in their Formula 1 junior 
              development program, representing a significant step by a major F1 team to address gender representation.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.womeninsport.org/research-and-advice/our-publications/where-are-all-the-women" target="_blank" rel="noopener noreferrer">
              <strong>Women in Sport et al. (2018): Where Are All the Women? Media Visibility Report</strong>
            </a>
            <p className="source-description">
              Comprehensive research report examining the visibility of women's sport in the media, revealing 
              significant disparities in coverage and representation that impact sponsorship opportunities and 
              public perception of women athletes.
            </p>
          </div>
          <div className="source-item">
            <a href="http://www.bbc.co.uk/sport/formula1/42890261" target="_blank" rel="noopener noreferrer">
              <strong>BBC Sport (2018): Formula 1 Grid Girls Removed</strong>
            </a>
            <p className="source-description">
              Coverage of Formula One's decision to discontinue the use of "grid girls" at races, representing a 
              shift in how the sport presents and represents women, moving away from objectification toward more 
              inclusive practices.
            </p>
          </div>
          <div className="source-item">
            <a href="https://journals.sagepub.com/doi/full/10.1177/13505068221094204" target="_blank" rel="noopener noreferrer">
              <strong>Critical Examination of Women's Participation in Formula One</strong>
            </a>
            <p className="source-description">
              This study examines current initiatives and programs designed to promote women in Formula One, 
              analyzing their effectiveness and the challenges they face. The research explores how media 
              representation shapes public perception and sponsorship opportunities.
            </p>
          </div>
          <div className="source-item">
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S1469029220308232?via%3Dihub" target="_blank" rel="noopener noreferrer">
              <strong>Women in Autoracing: Navigating Gender, Barriers, and Opportunities</strong>
            </a>
            <p className="source-description">
              Research on promoting girls and women in autoracing reveals the importance of early intervention, 
              family support, and systemic change. The study highlights how initiatives that address multiple 
              barriers simultaneously are most effective.
            </p>
          </div>
          <div className="source-item">
            <a href="https://go.gale.com/ps/i.do?p=CPI&u=duke_perkins&id=GALE%7CA426080476&v=2.1&it=r&sid=summon" target="_blank" rel="noopener noreferrer">
              <strong>Old Boys' Club? Women Are Making Strides in Formula One</strong>
            </a>
            <p className="source-description">
              This article examines recent progress in women's participation across various roles in Formula One, 
              while noting the persistent absence from the starting grid. It discusses how increased visibility 
              in engineering, management, and support roles may eventually translate to more opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4_Initiatives;
