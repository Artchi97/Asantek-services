import "../styles/MainSentence.css";
import CallBtn from "./CallBtn";

export default function MainSentence() {
  return (
    <div className="main-img-container">
      <div className="overlay"></div>
      <p className="main-sentence">Pogotowie hydrauliczne i elektryczne</p>
      <CallBtn />
    </div>
  );
}
