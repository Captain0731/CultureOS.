import { LuArrowRight } from "react-icons/lu";
import "../../../styles/hero.scss";
import HeroTextReveal from "../../../components/HeroTextReveal";

export default function Hero() {
  return (
    <section className="d-hero">
      <div className="d-blob"></div>

      <div className="d-hero-content">
        <HeroTextReveal
          line1="Culture doesn't break loudly."
          line2="It fades quietly."
        />

        <p className="d-sub">
          <span className="no-break">EARLY SIGNALS</span> •{" "}
          <span className="no-break">TEAM INSIGHTS</span> •{" "}
          <span className="no-break">CULTURE HEALTH</span> •{" "}
          <span className="no-break">REAL VISIBILITY</span>
        </p>

        <button className="d-button">
          Get Early Access{" "}
          <span
            className="d-icon"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LuArrowRight size={20} />
          </span>
        </button>
      </div>
    </section>
  );
}
