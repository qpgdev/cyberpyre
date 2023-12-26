import BulletedUnorderedList from "../../lib/BulletedUnorderedList";
import ExampleBox from "../../lib/ExampleBox";

const IntroOS = () => {
  const exampleContent =
    "Becky, a vampire, already has 1 dot in Celerity. If she decides to install a piece of cyberware that grants 2 dots in Celerity, she will not now have 3 dots in Celerity. Instead, she will now have two dots of Celerity, with one level one Celerity power through vampirism, one level one Celerity power through Speedware, and one level two Celerity power through Speedware.";
  const listContent = [
    "The Cyberware Density for Operating System powers is gained at a rate of 1 Cyberware Density per 1 dot in the Operating System acquired.",
    "Activating an Operating System power may cause the character to take one or more Superficial Willpower Damage (not halved), if the power requires it.",
    "Some Social and Mental Operating System powers may specify that they only affect targets who also have cyberware installed.",
    "A character may only have one Operating System installed at a time.",
  ];
  return (
    <div className="operating-systems-page-intro">
      <p className="setting-the-scene-title"> operating systems </p>

      <p style={{ textAlign: "justify" }}>
        Certain Augmentations can provide powers to a character, and often those
        Augmentations and powers can be upgraded or improved. The powers granted
        by these Augmentations are typically categorized under an Operating
        System. Just like Disciplines (see Vampire: the Masquerade 5th Edition
        Corebook, p.___), taking a dot in an Operating System allows for the
        acquisition of one power from that Operating System at a level
        requirement of equal to or less than the total number of dots in that
        Operating System. The core rules for Operating Systems are as follows:
      </p>

      <BulletedUnorderedList arrOfStrings={listContent}></BulletedUnorderedList>

      <p style={{ textAlign: "justify" }}>
        Some Operating System powers allow both vampires and mortals to have
        access to a Discipline through cyberware (such as the Speedware
        Operating System giving characters access to the Celerity Discipline).
        If the standard variant of a cyberware Discipline power would typically
        require a Rouse check (see Vampire: the Masquerade 5th Edition Corebook,
        p.___), using that power through cyberware instead causes Superficial
        Willpower Damage (not halved) equal to the number of Rouse checks that
        would have been required. Discipline powers gained through Augmentations
        are not cumulative with standard Discipline levels and powers already
        gained.
      </p>

      <ExampleBox str={exampleContent}></ExampleBox>
    </div>
  );
};

export default IntroOS;
