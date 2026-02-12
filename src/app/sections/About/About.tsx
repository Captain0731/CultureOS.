import { LuAperture, LuArrowRight } from "react-icons/lu";
import "../../../styles/about.scss";

export default function About() {
  return (
    <section className="about-section">
      <p className="top-label">( WHAT CULTUREOS DOES )</p>


      <h1 className="about-title">
        We show you the signals your team won’t say out loud.

        {/* <span className="fade-last">ns</span> */}
      </h1>

      <div className="about-content">
        <div className="about-left">
          <div className="flower-icon">
            <LuAperture size={80} strokeWidth={1} color="#000000" />
          </div>
        </div>

        <div className="about-right">
          <p>
            CultureOS is a culture-intelligence system for modern startups.
            We surface the early signs of disengagement, burnout, misalignment,
            and management friction — the things that normally appear
            only in exit interviews.
          </p>

          <button className="about-btn">
            How It Works <LuArrowRight className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
