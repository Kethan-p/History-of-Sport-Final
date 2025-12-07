import './ImpactSection.css';

function ImpactSection() {
    return (
        <div className="impact-section">
            <div className="impact-header">
                <h2>The Stark Reality</h2>
                <p className="impact-tagline">Numbers don't lie. Seventy-five years. Five women. Zero today.</p>
            </div>

            <div className="impact-grid">
                <div className="impact-card impact-card-primary">
                    <div className="impact-stat">5</div>
                    <div className="impact-label">Women who have raced in F1</div>
                    <div className="impact-context">Out of 774 total drivers since 1950</div>
                    <div className="impact-percentage">0.6%</div>
                </div>

                <div className="impact-card impact-card-secondary">
                    <div className="impact-stat">1976</div>
                    <div className="impact-label">Last woman to race</div>
                    <div className="impact-context">Lella Lombardi - nearly 50 years ago</div>
                </div>

                <div className="impact-card impact-card-tertiary">
                    <div className="impact-stat">0.5</div>
                    <div className="impact-label">Championship points scored</div>
                    <div className="impact-context">By Lella Lombardi - the ONLY woman ever</div>
                </div>
            </div>

            <div className="impact-quote-section">
                <blockquote className="impact-quote">
                    <p className="quote-text">
                        "The only helmet a woman should wear is the one at the hairdresser's."
                    </p>
                    <cite className="quote-attribution">
                        — Race director to Maria Teresa de Filippis, barring her from the 1958 French Grand Prix
                    </cite>
                </blockquote>
                <p className="quote-context">
                    This wasn't just one man's opinion. It reflected—and reinforced—the systemic exclusion that persists today.
                </p>
            </div>
        </div>
    );
}

export default ImpactSection;
