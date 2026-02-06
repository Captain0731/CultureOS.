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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </section>
  );
}
