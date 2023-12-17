import React from "react";

interface ArrayToTableProps {
  headers: string[];
  data: React.ReactNode[][];
}

class ArrayToTable extends React.Component<ArrayToTableProps> {
  renderTableHeaders() {
    const { headers } = this.props;

    return (
      <tr>
        {headers.map((header, index) => (
          <th key={index} style={headerStyle}>
            {header}
          </th>
        ))}
      </tr>
    );
  }

  renderTableRows() {
    const { data } = this.props;

    return data.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex} style={cellStyle}>
            {cell}
          </td>
        ))}
      </tr>
    ));
  }

  render() {
    return (
      <table
        className="array-to-table"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <thead>{this.renderTableHeaders()}</thead>
        <tbody>{this.renderTableRows()}</tbody>
      </table>
    );
  }
}

const cellStyle: React.CSSProperties = {
  border: "2px solid",
  padding: "10px",
  marginTop: "20px",
  marginBottom: "20px",
  marginLeft: "10px",
  marginRight: "10px",
  textAlign: "left",
};

const headerStyle: React.CSSProperties = Object.assign(cellStyle, {
  textAlign: "center",
});

Object.assign(headerStyle, cellStyle);

export default ArrayToTable;
