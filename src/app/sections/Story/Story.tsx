import "../../../styles/story.scss";

export default function Story() {
  return (
    <section className="story-container">

      {/* LABEL */}
      <p className="top-label">( A FOUNDER MOMENT )</p>

      {/* NARRATIVE INTRO */}
      <div className="story-intro">
        <div className="intro-line">
          <span className="intro-number">42</span>
          <span className="intro-text">people.</span>
        </div>
        <div className="intro-line">
          <span className="intro-text">Growing fast.</span>
        </div>
        <div className="intro-line highlight">
          <span className="intro-text">Everything looked fine.</span>
        </div>
      </div>

      {/* REVELATION */}
      <div className="revelation-section">
        <h2 className="revelation-heading">CultureOS showed the truth:</h2>
      </div>

      {/* INSIGHTS GRID */}
      <div className="insights-grid">

        <div className="insight-card">
          <div className="insight-icon">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="insight-text">
            One team <span className="bold">deeply disengaged</span>
          </p>
        </div>

        <div className="insight-card">
          <div className="insight-icon">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92176 4.44061 8.37485 5.27072 7.03255C6.10083 5.69025 7.28825 4.60557 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="insight-text">
            Repeated feedback about <span className="bold">a manager</span>
          </p>
        </div>

        <div className="insight-card">
          <div className="insight-icon">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <p className="insight-text">
            Early <span className="bold">burnout warnings</span>
          </p>
        </div>

      </div>

      {/* OUTCOME SECTION */}
      <div className="outcome-section">
        <div className="outcome-content">
          <p className="outcome-action">
            They stepped in early.
          </p>
          <div className="outcome-results">
            <span className="result-item">No drama.</span>
            <span className="result-divider">•</span>
            <span className="result-item">No crisis.</span>
            <span className="result-divider">•</span>
            <span className="result-item">Just clarity.</span>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="divider-wrapper">
        <div className="divider"></div>
      </div>

      {/* FINAL MESSAGE */}
      <div className="final-message">
        <p className="final-text">That's the difference</p>
        <p className="final-emphasis">visibility creates.</p>
      </div>

    </section>
  );
}