import "./ContentMain.css";
import Records from "../Records/Records";
import Process from "../Process/Process";
import Dataquality from "../Dataquality/Dataquality";

import Budget from "../Budget/Budget";
import Subscriptions from "../Subscriptions/Subscriptions";
import Savings from "../Growth/Growth";
import Loans from "../Loans/Loans";
import Financial from "../Financial/Financial";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Records />
            <Process />
            <Dataquality />
             <Savings />
        </div>
        <div className="content-grid-two">
            <Budget />
            <div className="grid-two-item">
              <div className="subgrid-two">
                <Subscriptions />
               
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <Loans />
                <Financial />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain
