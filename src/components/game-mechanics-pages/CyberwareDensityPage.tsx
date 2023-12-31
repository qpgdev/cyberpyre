import "../../App.css";
import ExampleBox from "../lib/ExampleBox";
import CyberwareDensityEffectsTable from "./cyberware-density-page-components/CyberwareDensityEffectsTable";

import { useNavigate } from "react-router-dom";

function CyberwareDensityPage() {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/");
  };

  const navigateToGlitchDice = () => {
    navigate("/game-mechanics/glitch-dice");
  };

  const exampleContent =
    "Sonya’s character does not currently have any cyberware installed, meaning that her character has a Cyberware Density level of 0. Sonya decides to install a monowire on her character - a deadly piece of cybernetic weaponry with a Cyberware Density of 1. After Sonya has the monowire installed, her character now has a Cyberware Density of 1.";

  return (
    <div className="scrollable-div" style={{ maxHeight: "95vh" }}>
      <div
        style={{ marginTop: "50px", marginLeft: "200px", marginRight: "200px" }}
      >
        <p className="setting-the-scene-title">what is cyberware density?</p>
        <p className="primary-text">
          In <em> cyberpyre</em>, the impact that installed cyberware has on a
          character’s autonomy and sense of self is measured via{" "}
          <strong> Cyberware Density. </strong>
          Any given piece of cyberware that a character can install will have a
          level of Cyberware Density across a <strong>
            {" "}
            range of 1 to 5{" "}
          </strong>{" "}
          - the more powerful a piece of cyberware, the higher the Cyberware
          Density. All characters are assumed to be born with a Cyberware
          Density level of 0. Whenever a character has cyberware installed,
          their total Cyberware Density level increases by the Cyberware Density
          of that modification.
        </p>

        <ExampleBox str={exampleContent}></ExampleBox>

        <p className="primary-text">
          Characters lose one level of maximum Humanity per level of Cyberware
          Density possessed by the cyberware they have installed. If a character
          with cyberware installed reaches zero Humanity, they fall completely
          into the throes of cyberpsychosis and are lost to Storyteller control
          forever.
        </p>
        <p className="primary-text">
          Vampires lose one level of their Generation's maximum Blood Potency
          (see Vampire: the Masquerade: 5th Ed Corebook, p.___) equal to half
          their total Cyberware Density level, rounded up. This cannot reduce
          them below the minimum Blood Potency for their Generation.
        </p>
        <p className="primary-text">
          A character’s Cyberware Density level can be temporarily reduced with
          specialized medication, medical supervision, and / or medical care.
          Medications typically come in the form of immunoblockers - pills or
          injections which help prevent undesireable side effects from excessive
          cyberware use.
        </p>
        <p className="primary-text">
          The only way to permanently reduce a character’s Cyberware Density is
          to have their cyberware removed, though this removal may have
          additional mechanical and narrative drawbacks for the character. This
          is particularly true for mortals, who cannot regrow lost limbs or
          other vital organs that were previously replaced by cyberware.
        </p>
        <CyberwareDensityEffectsTable></CyberwareDensityEffectsTable>
      </div>
      <div className="navigation-buttons-div">
        <button className="intro-button-alt" onClick={navigateToMain}>
          Back
        </button>
        <button className="intro-button-alt" onClick={navigateToGlitchDice}>
          Next
        </button>
      </div>
    </div>
  );
}

// export component
export default CyberwareDensityPage;
