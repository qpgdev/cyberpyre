import BulletedUnorderedList from "../lib/BulletedUnorderedList";
import ExampleBox from "../lib/ExampleBox";
import ArrayToTable from "../lib/ArrayToTable";

const AttributeAugmentationsPage = () => {
  const listItems = [
    "Installing Attribute-specific Augmentations will cause a character to gain 1 Cyberware Density for each Attribute dot gained.",
    "Every dot gained through Augmentations in Physical Attributes also grants +1 level of Armor.",
    "Every dot gained through Augmentations in Social or Mental Attributes also grants +1 level of Willpower.",
    "Augmentation bonuses to Composure or Resolve still increase maximum Willpower (see Vampire: the Masquerade 5th Ed Corebook, p.___) in addition to the increase mentioned above.",
    "Attribute-specific cyberware cannot increase any one Attribute beyond 5 dots. If Attribute-specific Augmentations would increase an Attribute beyond 5 dots, that Attribute has 5 dots instead.",
    "If a player wishes to further increase an Attribute that already has an Augmentation, the player may choose if they are getting further upgrades to the same piece of cyberware as the former Augmentation or if the increase to their Attribute is from a new piece of cyberware.  In either case, the character’s Cyberware Density is increased as normal.",
  ];

  const augHeaders = [
    "Physical Augmentations",
    "Social Augmentations",
    "Mental Augmentations",
  ];
  const augStr = ["Strength + 1", "Armor + 1", "Cyberware Density + 1"];
  const augCha = ["Charisma + 1", "Willpower + 1", "Cyberware Density + 1"];
  const augInt = ["Intelligence + 1", "Willpower + 1", "Cyberware Density + 1"];
  const augDex = ["Dexterity + 1", "Armor + 1", "Cyberware Density + 1"];
  const augMan = ["Manipulation + 1", "Willpower + 1", "Cyberware Density + 1"];
  const augWit = ["Wits + 1", "Willpower + 1", "Cyberware Density + 1"];
  const augSta = ["Stamina + 1", "Armor + 1", "Cyberware Density + 1"];
  const augCom = ["Composure + 1", "Willpower + 1", "Cyberware Density + 1"];
  const augRes = ["Resolve + 1", "Willpower + 1", "Cyberware Density + 1"];

  const data: React.ReactNode[][] = [
    [
      <BulletedUnorderedList arrOfStrings={augStr}></BulletedUnorderedList>,
      <BulletedUnorderedList arrOfStrings={augCha}></BulletedUnorderedList>,
      <BulletedUnorderedList arrOfStrings={augInt}></BulletedUnorderedList>,
    ],
    [
      <BulletedUnorderedList arrOfStrings={augDex}></BulletedUnorderedList>,
      <BulletedUnorderedList arrOfStrings={augMan}></BulletedUnorderedList>,
      <BulletedUnorderedList arrOfStrings={augWit}></BulletedUnorderedList>,
    ],
    [
      <BulletedUnorderedList arrOfStrings={augSta}></BulletedUnorderedList>,
      <BulletedUnorderedList arrOfStrings={augCom}></BulletedUnorderedList>,
      <BulletedUnorderedList arrOfStrings={augRes}></BulletedUnorderedList>,
    ],
  ];

  const exampleContent =
    "Billy’s character has a Strength Augmentation, represented by a mechanical arm, as his sole piece of cyberware.  His character’s Cyberware Density is currently 1. He decides to make two additional Augmentations to his character, installing a Dexterity Augmentation as well as an additional Strength Augmentation.  After talking to his Storyteller, he comes to the decision that the Dexterity Augmentation will be represented by a synaptic accelerator installed in his character’s nervous system, and that the additional Strength Augmentation will simply be represented as a hydraulic upgrade to his mechanical arm.   His character’s total Cyberware Density is now 3.";

  return (
    <div className="attribute-augmentations-page">
      <div
        className="scrollable-div"
        style={{ marginTop: "50px", marginLeft: "200px", marginRight: "200px" }}
      >
        <p className="setting-the-scene-title"> attribute augmentations </p>

        <p style={{ textAlign: "justify" }}>
          Impossibly nimble cybernetic fingers represent your bonus to Dexterity
          as you attempt to pick a lock. A literal silver tongue augments your
          Charisma, and an audiovisual enhancement improves your already attuned
          senses, raising your dots in Wits. This... <em>this </em> is what
          <em> cyberpyre </em> is about.
        </p>
        <p style={{ textAlign: "justify" }}>
          Attribute Augmentations are really one of the best ways to let a
          player's creativity shine. By design, Augmentations that increase
          Attributes are intentionally left nondescript in order to encourage
          player and Storyteller creativity. Is the Augmentation to your
          Strength a powerful cybernetic arm, a pair of solid steel hydraulic
          legs, or something else entirely? The form that these Augmentations
          take within your character’s story is completely up to the player and
          the Storyteller.
        </p>
        <p style={{ textAlign: "justify" }}>
          The rules for Attribute Augmentations are as follows:
        </p>

        <BulletedUnorderedList arrOfStrings={listItems}></BulletedUnorderedList>
        <ArrayToTable headers={augHeaders} data={data}></ArrayToTable>
        <ExampleBox str={exampleContent}></ExampleBox>
      </div>
    </div>
  );
};

export default AttributeAugmentationsPage;
