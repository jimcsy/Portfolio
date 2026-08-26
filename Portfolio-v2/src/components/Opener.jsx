import "./Opener.css";

export default function Opener() {
  return (
    <div className="opener" aria-live="polite" aria-label="Loading portfolio">
      <div className="opener-card">
        <p className="opener-kicker">Portfolio</p>
        <h1 className="opener-title">Genesis Jim</h1>
        <div className="opener-loader" role="status" aria-hidden="true">
          <span></span>
        </div>
      </div>
    </div>
  );
}
