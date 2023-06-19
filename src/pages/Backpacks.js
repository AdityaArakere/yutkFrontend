import yutkPopularT from "../yutkPopularT.jpg";
import yutkHoodie2 from "../yutkHoodie2.jpg";
import bags2 from "../bags2.jpg";
import bag from "../bag.jpg";
import bags from "../bags.jpg";
import './Backpack.css';

function Backpack() {
  return (
    <div className="main-display">
      <div className="left-display">
        <div className="left-pics">
          <img src={yutkHoodie2} alt="thumbnail" />
        </div>
        <div className="left-pics">
          <img src={yutkHoodie2} alt="thumbnail" />
        </div>
        <div className="left-pics">
          <img src={yutkHoodie2} alt="thumbnail" />
        </div>
      </div>
      <div className="right-display">
      <img src={yutkPopularT} alt="thumbnail" />
      </div>
    </div>
  );
}

export default Backpack;