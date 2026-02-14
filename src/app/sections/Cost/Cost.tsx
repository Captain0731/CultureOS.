import { LuTriangle } from "react-icons/lu";
import "../../../styles/cost.scss";

export default function Cost() {
  return (
    <section className="cost-container">

      {/* LABEL */}
      <p className="top-label" data-anim="fade-up">( THE REAL COST )</p>

      {/* MAIN HEADING */}
      <h1 className="cost-heading" data-anim="split-lines">
        The damage shows long before the resignations do.
      </h1>

      {/* COST GRID - Problems List */}
      <div className="cost-grid" data-anim="stagger-children">

        <div className="cost-item">
          <LuTriangle className="cost-bullet" size={18} />
          <p className="cost-text">
            High performers <span className="emphasis">quietly disconnect</span>
          </p>
        </div>

        <div className="cost-item">
          <LuTriangle className="cost-bullet" size={18} />
          <p className="cost-text">
            Managers <span className="emphasis">burn out silently</span>
          </p>
        </div>

        <div className="cost-item">
          <LuTriangle className="cost-bullet" size={18} />
          <p className="cost-text">
            Candidates sense <span className="emphasis">"something's off"</span>
          </p>
        </div>

        <div className="cost-item">
          <div className="cost-bullet"></div>
          <p className="cost-text">
            Conversations happen <span className="emphasis">only during exits</span>
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="divider-wrapper" data-anim="fade-in">
        <div className="divider"></div>
      </div>

      {/* FINAL SECTION */}
      <div className="final-section" data-anim="fade-up">
        <p className="final-intro">
          The most dangerous phrase in a startup?
        </p>

        <div className="final-quote-wrapper" data-anim="scale-in">
          {/* <div className="quote-decoration left"></div> */}
          <p className="final-quote">
            "Why didn't anyone tell me earlier?"
          </p>
          {/* <div className="quote-decoration right"></div> */}
        </div>
      </div>

    </section>
  );
}