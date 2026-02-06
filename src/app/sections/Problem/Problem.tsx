import "../../../styles/problem.scss";

export default function Problem() {
  return (
    <section className="problem-container">

      {/* LABEL */}
      <p className="top-label">( THE PROBLEM )</p>


      {/* MAIN CONTENT WRAPPER */}
      <div className="problem-content">

        {/* HEADING SECTION */}
        <div className="heading-section">
          <h1 className="problem-heading">
            Culture doesn't collapse
            <span className="heading-highlight"> overnight.</span>
          </h1>
          <h2 className="problem-sub">
            It erodes in silence.
          </h2>
        </div>

        {/* VISUAL DIVIDER WITH GRADIENT */}
        <div className="divider-wrapper">
          <div className="divider"></div>
        </div>

        {/* STAGES GRID - Redesigned as cards */}
        <div className="problem-stages">

          <div className="stage-card stage-1">
            <div className="stage-number">01</div>
            <div className="stage-content">
              <h3 className="stage-title">The Rush</h3>
              <ul className="stage-list">
                <li>Growth gets fast</li>
                <li>Processes lag behind</li>
                <li>Managers start improvising</li>
              </ul>
            </div>
          </div>

          <div className="stage-card stage-2">
            <div className="stage-number">02</div>
            <div className="stage-content">
              <h3 className="stage-title">The Silence</h3>
              <ul className="stage-list">
                <li>Feedback disappears</li>
                <li>People stop speaking up</li>
                <li>Everyone's too busy</li>
              </ul>
            </div>
          </div>

          <div className="stage-card stage-3">
            <div className="stage-number">03</div>
            <div className="stage-content">
              <h3 className="stage-title">The Breaking Point</h3>
              <ul className="stage-list">
                <li>No one's listening</li>
                <li>Pressure builds quietly</li>
                <li>Warning signs ignored</li>
              </ul>
            </div>
          </div>

        </div>

        {/* VISUAL DIVIDER */}
        <div className="divider-wrapper">
          <div className="divider"></div>
        </div>

        {/* ENDING SECTION - Redesigned */}
        <div className="ending-section">
          <p className="ending-text">
            And then one day — you hear the words you never expected:
          </p>

          <div className="quote-wrapper">
            <div className="quote-mark">"</div>
            <p className="ending-quote">
              I've decided to move on.
            </p>
            <div className="quote-mark closing">"</div>
          </div>
        </div>

      </div>
    </section>
  );
}