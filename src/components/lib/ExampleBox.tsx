import React from "react";

interface ExampleBoxProps {
  str: string;
}

const ExampleBox: React.FC<ExampleBoxProps> = ({ str }) => {
  const exampleContent = str;

  return (
    <p
      className="example-text"
      style={{
        border: "2px solid",
        padding: "10px",
        marginTop: "50px",
        marginBottom: "50px",
        marginLeft: "50px",
        marginRight: "50px",
      }}
    >
      <strong>Example: </strong> <em>{exampleContent} </em>
    </p>
  );
};

export default ExampleBox;
