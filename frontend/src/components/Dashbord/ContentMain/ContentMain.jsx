import "./ContentMain.css";
import Records from "../Records/Records";
import Process from "../Process/Process";
import Dataquality from "../Dataquality/Dataquality";
import Charts from "../Charts/Charts";
import History from "../History/History";
import Growth from "../Growth/Growth";
import AI_insides from "../AI_insides/AI_insides";
import Help from "../Help/Help";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Records />
            <Process />
            <Dataquality />
            <Growth />
        </div>
        <div className="content-grid-two">
            <Charts />
            <div className="grid-two-item">
              <div className="subgrid-two">
                <History />
               
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <AI_insides />
                <Help />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain
