import { LuArrowRight } from "react-icons/lu";
import "../../../styles/hero.scss";

export default function Hero() {
  return (
    <section className="d-hero">
      <div className="d-blob"></div>

      <h1 className="d-title">
        Culture doesn’t break loudly. <br /> It fades quietly.
      </h1>

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
