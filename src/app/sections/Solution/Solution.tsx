import { LuBadgeCheck, LuArrowRight } from "react-icons/lu";
import "../../../styles/solution.scss";

export default function Solution() {
  return (
    <section className="solution-section">
      <div className="solution-container">
        <p className="solution-label" data-anim="fade-up">( WHAT CULTUREOS IS )</p>

        <div className="solution-headline" data-anim="fade-up">
          <h2 className="solution-title">
            <span className="title-line">CultureOS isn't HR software.</span>
            <span className="title-line accent">It's a listening system.</span>
          </h2>
        </div>

        <p className="solution-subtitle" data-anim="fade-up">
          Not another dashboard. Not another survey. Not another "engagement program."
        </p>

        <div className="solution-content">
          <p className="solution-intro" data-anim="fade-up">CultureOS helps founders:</p>

          <ul className="solution-list" data-anim="stagger-children">
            <li className="solution-item">
              <LuBadgeCheck className="item-marker" size={18} />
              <span className="item-text">Hear what's usually left unsaid</span>
            </li>
            <li className="solution-item">
              <LuBadgeCheck className="item-marker" size={18} />
              <span className="item-text">Spot cultural fractures early</span>
            </li>
            <li className="solution-item">
              <LuBadgeCheck className="item-marker" size={18} />
              <span className="item-text">Turn gut feel into actionable insight</span>
            </li>
          </ul>

          <button className="solution-btn" data-anim="fade-up">
            Build culture before it breaks
            <LuArrowRight className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}