import { iconsImgs } from "../../../utils/images";

import "./Records.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
        <div className="grid-c-title">
            <p>Total Records</p>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c1-content">
           
            <img src={iconsImgs.barchart} />
            <div className="card-wrapper">
                <span className="card-pin-hidden"> 1,480 </span>
               
            </div>
            <div className="card-logo-wrapper">
                <div>
               
                    <p className="text text-sm text-white">Viwe details</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Cards
