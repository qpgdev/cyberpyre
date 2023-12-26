import cyberSalubri from "../../assets/salubri-cyberpunk.jpg";

import BulletedUnorderedList from "../lib/BulletedUnorderedList";

function WhatAreAugmentations() {
  const firstListItems = [
    "Attribute Augmentations that increase one of a character's Attributes;",
    "Neural Processors that allow for bonuses to Skills;",
    "Operating Systems which provide unique Powers;",
    "Augmentation Merits that allow for specialized abilities;",
    "Weapon Augmentations such as spring-loaded arm blades, thermal garrotes, finger guns, and more.",
  ];

  const secondListItems = [
    "Weak or niche experimental cyberware should begin with a Cyberware Density of 1;",
    "Unremarkable or common experimental cyberware should begin with a Cyberware Density of 2;",
    "Reasonably strong experimental cyberware should begin with a Cyberware Density of 3;",
    "Very strong experimental cyberware should begin with a Cyberware Density of 4;",
    "Powerful or story-altering experimental cyberware should begin with a Cyberware Density of 5.",
  ];

  return (
    <div className="container">
      <div className="scrollable-div">
        <div style={{ margin: "100px" }}>
          <p className="setting-the-scene-title">what are augmentations?</p>
          <p className="primary-text">
            In <em>cyberpyre,</em> installed cyberware is typically mechanically
            represented by <strong>Augmentations</strong>. There are many forms
            of Augmentations, including:
          </p>

          <BulletedUnorderedList
            arrOfStrings={firstListItems}
          ></BulletedUnorderedList>

          <p className="primary-text">
            Storytellers are encouraged to experiment with homebrew
            Augmentations which mimic existing or create new Disciplines,
            Merits, or Advantages. The Cyberware Density will vary depending on
            the strength of the Merit itself in the chronicle, and it is left to
            Storyteller discretion whether the Cyberware Density of a custom
            piece of equipment needs to be increased at all during the course of
            the game. After all, the full effects of “experimental” cyberware
            are hard to predict for both ripperdocs and Storytellers alike.
          </p>
          <BulletedUnorderedList
            arrOfStrings={secondListItems}
          ></BulletedUnorderedList>
        </div>
      </div>
      <img className="setting-the-scene-img" src={cyberSalubri}></img>
    </div>
  );
}

export default WhatAreAugmentations;
