import { iconsImgs } from "../utils/images";
import "./Process.css";
import { reportData } from "../data/data";

const Process = () => {
  return (
    <div className="grid-one-item grid-common grid-c3">
        <div className="grid-c-title">
            <p>Processing Time</p>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c3-content">
            <div className="grid-box2 ">
           <img src={iconsImgs.time} />
            <span className="lg-value">100,000</span>
        </div>
            <br></br>
            <div>
                    <p className="text text-sm text-white">Viwe details</p>
            </div>
        </div>
    </div>
  )
}

export default Process
