import { iconsImgs } from "../utils/images";

import "./Records.css";

const Records = () => {
  return (
    <div className="grid-one-item grid-common grid-c1 blur">
        <div className="grid-c-title">
            <p>Total Records</p>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        
        <div className="grid-box1 ">
           <img src={iconsImgs.barchart} />
            <span className="lg-value">100,000</span>
        </div>
            <br></br>
                <div>
                    <p className="text text-sm text-white">Viwe details</p>
                </div>
        </div>
    
  )
}

export default Records
