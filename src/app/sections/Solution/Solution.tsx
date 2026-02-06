import "../../../styles/solution.scss";

export default function Solution() {
  return (
    <section className="solution-section">
      <div className="solution-container">
        <p className="solution-label">( WHAT CULTUREOS IS )</p>

        <div className="solution-headline">
          <h2 className="solution-title">
            <span className="title-line">CultureOS isn't HR software.</span>
            <span className="title-line accent">It's a listening system.</span>
          </h2>
        </div>

        <p className="solution-subtitle">
          Not another dashboard. Not another survey. Not another "engagement program."
        </p>

        <div className="solution-content">
          <p className="solution-intro">CultureOS helps founders:</p>

          <ul className="solution-list">
            <li className="solution-item">
              <span className="item-marker">●</span>
              <span className="item-text">Hear what's usually left unsaid</span>
            </li>
            <li className="solution-item">
              <span className="item-marker">●</span>
              <span className="item-text">Spot cultural fractures early</span>
            </li>
            <li className="solution-item">
              <span className="item-marker">●</span>
              <span className="item-text">Turn gut feel into actionable insight</span>
            </li>
          </ul>

          <button className="solution-btn">
            Build culture before it breaks
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}