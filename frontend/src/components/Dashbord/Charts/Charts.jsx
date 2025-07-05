import "./Charts.css";
import { iconsImgs } from "../utils/images";
import { budget } from "../data/data";
import { useLocation, useNavigate } from 'react-router-dom';

const Charts = () => {
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <div className="grid-two-item grid-common grid-c4">
        
        <div className="grid-c-top text-silver-v4">
            <h2 className="lg-value">Charts</h2>
            {location.pathname !== "/charts" && (
            <button className="grid-c-title-icon" onClick={() => navigate('/charts')}>
            <img src={iconsImgs.plus} alt="Add" />
        </button>
            )}
        </div>
        <div className="grid-c4-content bg-jet">
            <div className="grid-items">
                {
                    budget.map((budget) => (
                        <div className="grid-item" key = { budget.id }>
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.check } />
                                </div>
                                <p className="text text-silver-v1">{ budget.title } <span>{ budget.type }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1">RS. { budget.amount }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Charts
