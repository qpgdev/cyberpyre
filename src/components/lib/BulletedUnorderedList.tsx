import React from "react";

interface BulletedUnorderedListProps {
  arrOfStrings: string[];
}

const BulletedUnorderedList: React.FC<BulletedUnorderedListProps> = ({
  arrOfStrings,
}) => {
  const listItems = arrOfStrings.map((str, index) => (
    <li key={index}>{str}</li>
  ));

  return (
    <ul
      style={{
        listStyleType: "disc",
        listStylePosition: "outside",
        textAlign: "left",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "50px",
        marginRight: "50px",
      }}
    >
      {listItems}
    </ul>
  );
};

export default BulletedUnorderedList;
