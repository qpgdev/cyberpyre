const AttributeAugmentationsPage = () => {
  return (
    <div className="attribute-augmentations-page">
      <p className="setting-the-scene-title"> attribute augmentations </p>
      <p>
        Attribute-specific Augmentations will cause a character to gain 1
        Cyberware Density for each Attribute dot gained.
      </p>
      <ul style={{ listStyleType: "disc" }}>
        <li>
          Every dot gained through Augmentations in Physical Attributes also
          grants +1 level of Armor.
        </li>
      </ul>
    </div>
  );
};

export default AttributeAugmentationsPage;
