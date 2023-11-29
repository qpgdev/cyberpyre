function ExperimentalCyberwareTable() {
  return (
    <div className="scrollable-div" style={{ maxHeight: "95vh" }}>
      <ul>
        <li style={{ listStylePosition: "outside", textAlign: "left" }}>
          Weak or niche experimental cyberware should begin with a Cyberware
          Density of 1;
        </li>
        <li style={{ listStylePosition: "outside", textAlign: "left" }}>
          Unremarkable or common experimental cyberware should begin with a
          Cyberware Density of 2;
        </li>
        <li style={{ listStylePosition: "outside", textAlign: "left" }}>
          Reasonably strong experimental cyberware should begin with a Cyberware
          Density of 3;
        </li>
        <li style={{ listStylePosition: "outside", textAlign: "left" }}>
          Very strong experimental cyberware should begin with a Cyberware
          Density of 4;
        </li>
        <li style={{ listStylePosition: "outside", textAlign: "left" }}>
          Powerful or story-altering experimental cyberware should begin with a
          Cyberware Density of 5.
        </li>
      </ul>
    </div>
  );
}

export default ExperimentalCyberwareTable;
