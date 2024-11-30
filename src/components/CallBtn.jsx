import "../styles/CallBtn.css";

export default function CallBtn() {
  return (
    <div className="call-btn-container">
      <h2 className="need-help-h2">Potrzebujesz sprawnej pomocy?</h2>
      <button className="call-btn">
        <a href="tel:+48451186146">Zadzwoń: +48 451 186 146</a>
      </button>
    </div>
  );
}
