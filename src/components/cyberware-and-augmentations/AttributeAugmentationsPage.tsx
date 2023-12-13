import BulletedUnorderedList from "../lib/BulletedUnorderedList";

const AttributeAugmentationsPage = () => {
  const listItems = [
    "Every dot gained through Augmentations in Physical Attributes also grants +1 level of Armor.",
    "Every dot gained through Augmentations in Social or Mental Attributes also grants +1 level of Willpower.",
    "Augmentation bonuses to Composure or Resolve still increase maximum Willpower (see Vampire: the Masquerade 5th Ed Corebook, p.___) in addition to the increase mentioned above.",
    "Attribute-specific cyberware cannot increase any one Attribute beyond 5 dots. If Attribute-specific Augmentations would increase an Attribute beyond 5 dots, that Attribute has 5 dots instead.",
    "If a player wishes to further increase an attribute that already has an Augmentation, the player may choose if they are getting further upgrades to the same piece of cyberware as the former Augmentation or if the increase to their attribute is from a new piece of cyberware.  In either case, the character’s Cyberware Density is increased as normal.",
  ];

  return (
    <div className="attribute-augmentations-page">
      <div
        className="scrollable-div"
        style={{ marginTop: "50px", marginLeft: "200px", marginRight: "200px" }}
      >
        <p className="setting-the-scene-title"> attribute augmentations </p>
        <p>
          Attribute-specific Augmentations will cause a character to gain 1
          Cyberware Density for each Attribute dot gained.
        </p>
        <BulletedUnorderedList arrOfStrings={listItems}></BulletedUnorderedList>
      </div>
    </div>
  );
};

export default AttributeAugmentationsPage;
