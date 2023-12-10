import { useLocation, useNavigate } from "react-router-dom";

function CompulsionsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToGlitchDice = () => {
    navigate("/game-mechanics/glitch-dice");
  };

  const navigateToInstallingRemoving = () => {
    navigate("/game-mechanics/installing-removing");
  };

  return (
    <div className="scrollable-div" style={{ maxHeight: "95vh" }}>
      <div
        style={{ marginTop: "50px", marginLeft: "200px", marginRight: "200px" }}
      >
        <p className="setting-the-scene-title">cybernetic compulsions</p>
        <p className="game-mechanics-text">
          Certain in-game events (such as a player getting a{" "}
          <strong>Glitchy Critical</strong>) can result in a character
          experiencing a <strong>Cybernetic Compulsion, </strong>
          causing a character to become acutely aware of (or beholden to) the
          cybernetics in their body.
        </p>
        <p className="game-mechanics-text">
          Provided below are some example compulsions certified to make players
          sweat. Feel free to take creative liberties here - if there is a
          better narrative compulsion for that character to have in the moment,
          go for it. The goal with compulsions is to remind your players that
          their choice to trade flesh and bone for power has real consequences
          on their agency over their character.
        </p>
        <div
          className="cyberpyre-density-effects-table"
          style={{
            border: "2px solid",
            marginTop: "50px",
            marginBottom: "50px",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          <p>
            <strong>Cybernetic Compulsions Table</strong>
          </p>

          {/* Upgrades, People, Upgrades! */}
          <div
            className="cyberware-density-box"
            style={{ display: "flex", borderTop: "2px solid", padding: "10px" }}
          >
            <p
              style={{
                minHeight: "1px",
                verticalAlign: "center",
                textAlign: "center",
                padding: "10px",
                paddingTop: "0px",
                maxWidth: "100px",
              }}
            >
              <strong> Upgrades, People, Upgrades! </strong>
            </p>
            <div
              className="cyberware-density-effects-box"
              style={{ paddingLeft: "1em" }}
            >
              <p style={{ textAlign: "left", marginBottom: "0px" }}>
                <em>The character is compelled to install more cyberware. </em>
              </p>
              <p style={{ textAlign: "left", marginTop: "0px" }}>
                The player subtracts a number of dice equal to half of their
                Cyberware Density from all dice pools until a new piece of
                cyberware with a minimum Cyberware Density of 1 has been
                installed.
              </p>
            </div>
          </div>

          {/* What Have I Become? */}
          <div
            className="cyberware-density-box"
            style={{ display: "flex", borderTop: "2px solid", padding: "10px" }}
          >
            <p
              style={{
                minHeight: "1px",
                verticalAlign: "center",
                textAlign: "center",
                padding: "10px",
                paddingTop: "0px",
                maxWidth: "100px",
              }}
            >
              <strong> What Have I Become? </strong>
            </p>
            <div
              className="cyberware-density-effects-box"
              style={{ paddingLeft: "1em" }}
            >
              <p style={{ textAlign: "left", marginBottom: "0px" }}>
                <em>
                  The character is compelled to lighten their cybernetic load.{" "}
                </em>
              </p>
              <p style={{ textAlign: "left", marginTop: "0px" }}>
                The character subtracts a number of dice equal to half of their
                Cyberware Density from all dice pools until a piece of cyberware
                with a minimum Cyberware Density of 1 has been removed from
                their body and destroyed.
              </p>
            </div>
          </div>

          {/* Can't Trust These Damn Computers */}
          <div
            className="cyberware-density-box"
            style={{ display: "flex", borderTop: "2px solid", padding: "10px" }}
          >
            <p
              style={{
                minHeight: "1px",
                verticalAlign: "center",
                textAlign: "center",
                padding: "10px",
                paddingTop: "0px",
                maxWidth: "100px",
              }}
            >
              <strong> Can't Trust These Damn Computers </strong>
            </p>
            <div
              className="cyberware-density-effects-box"
              style={{ paddingLeft: "1em" }}
            >
              <p style={{ textAlign: "left", marginBottom: "0px" }}>
                <em>
                  The character’s cyberware fails in some catastrophic way.{" "}
                </em>
              </p>
              <p style={{ textAlign: "left", marginTop: "0px" }}>
                The cyberware which caused the Compulsion cannot be used again
                until it is repaired (see “Repairing Cyberware”).
              </p>
            </div>
          </div>

          {/* Hot, Hot! */}
          <div
            className="cyberware-density-box"
            style={{ display: "flex", borderTop: "2px solid", padding: "10px" }}
          >
            <p
              style={{
                minHeight: "1px",
                verticalAlign: "center",
                textAlign: "center",
                padding: "10px",
                paddingTop: "0px",
                width: "100px",
              }}
            >
              <strong> Hot, Hot! </strong>
            </p>
            <div
              className="cyberware-density-effects-box"
              style={{ paddingLeft: "1em" }}
            >
              <p style={{ textAlign: "left", marginBottom: "0px" }}>
                <em>
                  The character pushes their cyberware beyond its limit, causing
                  it to overheat within their body and cause severe harm.
                </em>
              </p>
              <p style={{ textAlign: "left", marginTop: "0px" }}>
                The character takes one level of Aggravated Damage and cannot
                use the cyberware which caused the Compulsion again for the
                remainder of the scene.
              </p>
            </div>
          </div>

          {/* Mental Boom */}
          <div
            className="cyberware-density-box"
            style={{ display: "flex", borderTop: "2px solid", padding: "10px" }}
          >
            <p
              style={{
                minHeight: "1px",
                verticalAlign: "center",
                textAlign: "center",
                padding: "10px",
                paddingTop: "0px",
                width: "100px",
              }}
            >
              <strong> Mental Boom </strong>
            </p>
            <div
              className="cyberware-density-effects-box"
              style={{ paddingLeft: "1em" }}
            >
              <p style={{ textAlign: "left", marginBottom: "0px" }}>
                <em>
                  The character dissociates, experiencing vivid, horrifying
                  hallucinations of blood, metal, and chrome.
                </em>
              </p>
              <p style={{ textAlign: "left", marginTop: "0px" }}>
                The character subtracts a number of dice equal to half of their
                Cyberware Density from all dice pools requiring a Mental or
                Social Attribute for the remainder of the scene.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-buttons-div">
      <button
            className="intro-button-alt"
            onClick={navigateToGlitchDice}
          >
            Back
          </button>
          <button
            className="intro-button-alt"
            onClick={navigateToInstallingRemoving}
          >
            Next
          </button>
      </div>
    </div>
  );
}

// export component
export default CompulsionsPage;
