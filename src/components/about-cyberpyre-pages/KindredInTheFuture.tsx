import "../../App.css";
import boot from "../../assets/neon-boot.png";

function KindredInTheFuture() {
  const FAQBoxTitleStylings = {
    marginBottom: "0px",
  };

  const FAQBoxStylings = {
    marginTop: "0px",
  };

  return (
    <div className="scrollable-div" style={{ maxHeight: "95vh" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginTop: "50px",
            marginLeft: "100px",
            marginRight: "100px",
            justifyContent: "center",
          }}
        >
          <p
            className="setting-the-scene-title"
            style={{ fontFamily: "Orbitron", fontSize: "50px" }}
          >
            A lot has changed over the last century.
          </p>
          <p className="game-mechanics-text" style={FAQBoxTitleStylings}>
            <strong>Do mortals know that vampires are real? </strong>
          </p>
          <p className="game-mechanics-text" style={FAQBoxStylings}>
            No. The Masquerade
            <em>
              {" "}
              (see Vampire: the Masquerade: 5th Edition Corebook, p. 51),
            </em>{" "}
            an ancient tradition which serves to hide the existence of vampires
            from the mortal world, is still fully enforced by the Camarilla.
            That being said, in an age where body modification is not just
            common, but the norm, the Camarilla has done significant work to
            ensure that vampire media (and modifications) are plentiful. Plenty
            of regular mortals walk the city streets sporting retractable fangs,
            blood-red eyes, and corpse-pale skin. Thanks to advancements in
            cyberware and augmentations, plenty of mortals also exhibit strange
            powers and abilities which only a century ago would have been
            considered to be supernatural. Your mobile phone may have looked to
            a priest in Salem during the 17th century as if it was a mirror to
            another world. To you today, it just looks like Instagram.
          </p>
          <p className="game-mechanics-text" style={FAQBoxTitleStylings}>
            <strong>
              I thought Kindred reverted to their appearance at time of death.
              How can they have cyberware?
            </strong>{" "}
          </p>
          <p className="game-mechanics-text" style={FAQBoxStylings}>
            Mortal technology isn't the only area that has seen advancements -
            Tzimisce ripperdocs are becoming more and more common in Kindred
            circles, with each day seeing more and more ingenious designs.
            Meanwhile, Tremere warlocks and sorcerors have found some creative
            uses for certain Blood Sorcery rituals, particularly Seal The Brand
            <em> (see Vampire: The Masquerade Player's Guide, p. 99),</em> a
            ritual involving pouring molten silver over a body modification,
            tattoo, brand, or even... you guessed it, cyberware! A successful
            ritual allows vampires to retain those changes as part of their
            undying body, as opposed to their cursed bodies rejecting the change
            as they normally do.
          </p>
          <p className="game-mechanics-text" style={FAQBoxTitleStylings}>
            <strong>
              What happens to a mortal with cyberware when they are embraced?
            </strong>{" "}
          </p>
          <p className="game-mechanics-text" style={FAQBoxStylings}>
            The mechanics for the Embrace, or the siring of a new vampire, are
            relatively vague in <em> Vampire: The Masquerade 5th Edition. </em>
            All that is known for sure is that a vampire must feed a recently
            exsanguinated corpse some of their undying blood (also referred to
            as <em>vitae</em>), and that the corpse may rise at that character's
            Generation + 1. The interaction that the healing properties of vitae
            can have with cyberware is worth considering - given enough vitae, a
            mortal's body could regrow any "missing" biological components,
            causing their body to expel their mortal cybernetics. Even if this
            fails to happen, mortal cyberware will not function in the body of a
            vampire unless the vampire uses Blush of Life, requiring the
            character to seek out a ripperdoc with some knowledge of Blood
            Sorcery. Refer to{" "}
            <em>Vampire: The Masquerade 5th Edition Corebook, p. 240</em> for
            additional information on how to run an Embrace.
          </p>
        </div>
        <img src={boot} style={{ height: "95vh" }}></img>
      </div>
    </div>
  );
}

export default KindredInTheFuture;
