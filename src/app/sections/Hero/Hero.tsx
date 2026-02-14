import { LuArrowRight } from "react-icons/lu";
import "../../../styles/hero.scss";
import HeroTextReveal from "../../../components/HeroTextReveal";

export default function Hero() {
  return (
    <section className="d-hero">
      <div className="d-blob"></div>

      <HeroTextReveal
        line1="Culture doesn't break loudly."
        line2="It fades quietly."
      />

      <p className="d-sub">
        EARLY SIGNALS • TEAM INSIGHTS • CULTURE HEALTH • REAL VISIBILITY
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
    </section>
  );
}
