import { useNavigate } from "react-router-dom";

import BulletedUnorderedList from "../lib/BulletedUnorderedList";

function InstallingRemovingPage() {
  const navigate = useNavigate();

  const navigateToCompulsions = () => {
    navigate("/game-mechanics/compulsions");
  };

  const navigateToCyberwareDamage = () => {
    navigate("/game-mechanics/cyberware-damage");
  };

  const listItems = [
    "Intelligence / Wits / Resolve + Medicine;",
    "Intelligence / Wits / Resolve + Technology;",
    "A Ritual roll if installing cyberware on a vampire (see “Seal the Brand,” Vampire the Masquerade: Player’s Guide; p.99).",
  ];

  return (
    <div className="scrollable-div" style={{ maxHeight: "95vh" }}>
      <div
        style={{ marginTop: "50px", marginLeft: "200px", marginRight: "200px" }}
      >
        <p className="setting-the-scene-title">
          installing, removing, or swapping cyberware
        </p>
        <p className="primary-text">
          Installing, removing, or swapping cyberware causes a character to
          experience Aggravated Health Damage on a one-for-one basis based on
          the Cyberware Density of the cyberware installed. Mortals suffer this
          damage due to the invasive nature of the procedure. Vampires, who
          typically cannot have any kind of standard body modifications
          installed without their bodies rejecting it (as part of their curse
          involves their bodies appearing as it did on the night of their
          Embrace), suffer this damage due the need for molten silver to
          permanently bond the cyberware to their bodies (see “Seal the Brand,”
          Vampire: the Masquerade: Player’s Guide; p. 99).
        </p>
        <p className="primary-text">
          Assuming they possess the proper equipment and are in a medical or
          laboratory setting, if a character is attempting to install cyberware
          on another character, it requires the following tests at a difficulty
          equal to the Cyberware Density of the installed cyberware: <br></br>
        </p>

        <BulletedUnorderedList arrOfStrings={listItems}></BulletedUnorderedList>

        <p className="primary-text">
          If a character is attempting to install the cyberware on themselves,
          the above tests should be performed at a difficulty of 2 plus the
          Cyberware Density of the installed cyberware instead.
        </p>
        <p className="primary-text">
          If a character is attempting to install cyberware in the field and not
          in a medical or laboratory setting, follow the steps above, but
          increase the difficulty by an additional 2.
        </p>
        <p className="primary-text">
          If any of the above tests fail, the cyberware is not installed, but
          the character still receives Aggravated Damage equal to the Cyberware
          Density of the attempted install.
        </p>
        <p className="primary-text">
          Failing the Medicine test could result in temporary (normal failure)
          or permanent (critical failure) loss of Attribute dots equal to the
          level of Cyberware Density of the cyberware involved in the failed
          test. A failed Medicine test on a cybernetic arm meant to accentuate
          Strength could damage a Physical Attribute, whereas a failed neural
          processor installation could damage a Social or Mental Attribute.
        </p>
        <p className="primary-text">
          Failing the Technology test results in the damage (normal failure) or
          destruction (critical failure) of the cyberware itself. Damaged
          cyberware takes one point of damage for each failed roll on the
          margin. This damage cannot exceed the Cyberware Density of the
          cyberware.
        </p>
        <p className="primary-text">
          Failing the Ritual roll on a vampire causes the installed cybernetics
          to not function properly, and they will be fully expelled from the
          vampire’s body like any other foreign object after a number of nights
          equal to the Cyberware Density of the install.
        </p>
        <p className="primary-text">
          Removing installed cyberware will increase the character's maximum
          Humanity on a one-for-one basis per level of Cyberware Density of the
          removed modification, but will not increase the character's current
          Humanity level. Mortals, who may have completely removed their
          original limbs or organs in order to "upgrade," may find regaining new
          biological components incredibly difficult or even impossible, and may
          suffer temporary or permanent negative Attribute modifiers at
          Storyteller discretion as their bodies try to adapt to the loss of
          their cyberware.
        </p>
        <p className="primary-text">
          If a player's Humanity is reduced to zero after having cyberware
          installed, they immediately experience cyberpsychosis (or wassail, if
          a vampire) and are lost to Storyteller control.
        </p>
      </div>
      <div className="navigation-buttons-div">
        <button className="intro-button-alt" onClick={navigateToCompulsions}>
          Back
        </button>
        <button
          className="intro-button-alt"
          onClick={navigateToCyberwareDamage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default InstallingRemovingPage;
