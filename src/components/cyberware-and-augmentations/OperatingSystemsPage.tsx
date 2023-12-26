import IntroOS from "./operating-system-page-components/IntroOS";
import BerserkOS from "./operating-system-page-components/BerserkOS";
import NeurodeckOS from "./operating-system-page-components/NeurodeckOS";
import SpeedwareOS from "./operating-system-page-components/SpeedwareOS";
import SoteriaOS from "./operating-system-page-components/SoteriaOS";

const OperatingSystemsPage = () => {
  return (
    <div className="operating-systems-page">
      <div
        className="scrollable-div"
        style={{ marginTop: "50px", marginLeft: "200px", marginRight: "200px" }}
      >
        <IntroOS></IntroOS>
        <BerserkOS></BerserkOS>
        <NeurodeckOS></NeurodeckOS>
        <SpeedwareOS></SpeedwareOS>
        <SoteriaOS></SoteriaOS>
      </div>
    </div>
  );
};

export default OperatingSystemsPage;
