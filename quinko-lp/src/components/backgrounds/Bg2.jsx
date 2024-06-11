import svg1 from "../../assets/svg_tr_2.svg";
import svg2 from "../../assets/svg_bl_2.svg";

export default function Bg2({ content }) {
  return (
    <div className="relative full-section overlap-animation">
      <img src={svg1} className="absolute top-0 right-0" />
      <img src={svg2} className="absolute bottom-0 left-0" />
      {content}
    </div>
  );
}
