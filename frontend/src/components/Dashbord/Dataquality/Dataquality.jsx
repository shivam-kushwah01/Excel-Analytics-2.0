import "./Dataquality.css";
// import styles from "../Main/styles.module";
import { transactions } from "../data/data";
import { iconsImgs } from "../utils/images";

const Dataquality = () => {
  return (
    <div className="grid-one-item grid-common grid-c2 blur">
        <div className="grid-c-title">
            <p>Data Qality</p>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c3-content">
            <div className="grid-box2 ">
           <img src={iconsImgs.dataquality} />
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

export default Dataquality
