import { savings } from "../data/data";
import { iconsImgs, personsImgs } from "../utils/images";
import "./Growth.css";

const Growth = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c6 blur">
        <div className="grid-c-title">
            <p>Growth Rate</p>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
       <div className="grid-c3-content">
            <div className="grid-box2 ">
           <img src={iconsImgs.arrowgrowth} />
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

export default Growth
