import BulletedUnorderedList from "../lib/BulletedUnorderedList";
import ArrayToTable from "../lib/ArrayToTable";

const NeuralProcessorsPage = () => {
  const npHeaders = [
    "Neural Processor Mk. 1",
    "Neural Processor Mk. 2",
    "Neural Processor Mk. 3",
    "Neural Processor Mk. 4",
    "Neural Processor Mk. 5",
  ];
  const mk1 = ["1 available chip slot", "Cyberware Density + 1"];
  const mk2 = ["2 available chip slots", "Cyberware Density + 2"];
  const mk3 = ["3 available chip slots", "Cyberware Density + 3"];
  const mk4 = ["4 available chip slots", "Cyberware Density + 4"];
  const mk5 = ["5 available chip slots", "Cyberware Density + 5"];

  const data: React.ReactNode[][] = [
    [
      <BulletedUnorderedList arrOfStrings={mk1}></BulletedUnorderedList>,
      <BulletedUnorderedList arrOfStrings={mk2}></BulletedUnorderedList>,
      <BulletedUnorderedList arrOfStrings={mk3}></BulletedUnorderedList>,
      <BulletedUnorderedList arrOfStrings={mk4}></BulletedUnorderedList>,
      <BulletedUnorderedList arrOfStrings={mk5}></BulletedUnorderedList>,
    ],
  ];

  return (
    <div className="neural-processors-page">
      <div
        className="scrollable-div"
        style={{ marginTop: "50px", marginLeft: "200px", marginRight: "200px" }}
      >
        <p className="setting-the-scene-title"> neural processors </p>

        <p className="primary-text">
          Neural Processors are a specialized type of Augmentation which is
          installed at the base of the neck. Neural Processors have a Cyberware
          Density based on the number of available chip slots they provide, from
          a minimum of one to a maximum of five. For each chip slot, a character
          may have an active Skill chip installed, which can confer bonuses to a
          specific Skill ranging from as little as +1 to as high as +4. Changing
          a chip quickly or on short notice is considered a minor action and
          requires a Dexterity + Wits test at Difficulty 2.
        </p>

        <ArrayToTable headers={npHeaders} data={data}></ArrayToTable>
        <p className="primary-text">
          Storytellers and players are again encouraged to be creative when it
          comes to Skill chips. A Skill chip which provides a +1 to Brawl may be
          represented as a series of Tae Kwon Do kicks uploaded directly to the
          user’s muscle memory, while a Skill Chip with a +4 bonus to
          Performance could funnel the decades of experience of a master pianist
          directly to the fingertips of a novice.
        </p>
        <p className="primary-text">
          Don't underestimate the power of Skill Chips. They allow characters to
          break the typical mold of their build - characters who were built to
          do nothing but fight are suddenly equally (or more) adept at hacking
          into security systems, and characters who were built to be potent
          wordsmiths are suddenly also masters of hand-to-hand combat. This is
          the appeal of chips - allowing characters to break out of their mold a
          little - but it can quickly lead to coterie member with a Neural
          Processor becoming the main character of the party, effortlessly (and
          worse, independently) dispatching any problems that arise. In general,
          try to emphasize the availability of chips which balance out a
          character's pain points. Be cautious giving chips out liberally, and
          if a player feels like they're abusing them too much, take advantage
          of your role as Storyteller to find an appropriately devastating way
          to destroy them.
        </p>
      </div>
    </div>
  );
};

export default NeuralProcessorsPage;
