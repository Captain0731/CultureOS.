import { LuLayers, LuMessageSquare, LuActivity } from "react-icons/lu";
import "../../../styles/story.scss";

export default function Story() {
  return (
    <section className="story-container">

      {/* LABEL */}
      <p className="top-label" data-anim="fade-up">( A FOUNDER MOMENT )</p>

      {/* NARRATIVE INTRO */}
      <div className="story-intro" data-anim="stagger-children">
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
      <div className="revelation-section" data-anim="fade-up">
        <h2 className="revelation-heading">CultureOS showed the truth:</h2>
      </div>

      {/* INSIGHTS GRID */}
      <div className="insights-grid" data-anim="stagger-children">

        <div className="insight-card">
          <div className="insight-icon">
            <div className="icon-circle">
              <LuLayers size={24} />
            </div>
          </div>
          <p className="insight-text">
            One team <span className="bold">deeply disengaged</span>
          </p>
        </div>

        <div className="insight-card">
          <div className="insight-icon">
            <div className="icon-circle">
              <LuMessageSquare size={24} />
            </div>
          </div>
          <p className="insight-text">
            Repeated feedback about <span className="bold">a manager</span>
          </p>
        </div>

        <div className="insight-card">
          <div className="insight-icon">
            <div className="icon-circle">
              <LuActivity size={24} />
            </div>
          </div>
          <p className="insight-text">
            Early <span className="bold">burnout warnings</span>
          </p>
        </div>

      </div>

      {/* OUTCOME SECTION */}
      <div className="outcome-section" data-anim="fade-up">
        <div className="outcome-content">
          <p className="outcome-action">
            They stepped in early.
          </p>
          <div className="outcome-results" data-anim="stagger-children">
            <span className="result-item">No drama.</span>
            <span className="result-divider">•</span>
            <span className="result-item">No crisis.</span>
            <span className="result-divider">•</span>
            <span className="result-item">Just clarity.</span>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="divider-wrapper" data-anim="fade-in">
        <div className="divider"></div>
      </div>

      {/* FINAL MESSAGE */}
      <div className="final-message" data-anim="fade-up">
        <p className="final-text">That's the difference</p>
        <p className="final-emphasis">visibility creates.</p>
      </div>

    </section>
  );
}