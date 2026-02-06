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
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(60, 60)">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <ellipse
                    key={i}
                    cx="0"
                    cy="-25"
                    rx="8"
                    ry="28"
                    fill="#000000"
                    transform={`rotate(${i * 45})`}
                  />
                ))}
              </g>
            </svg>
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
            How It Works <span className="icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
