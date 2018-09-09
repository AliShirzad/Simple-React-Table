import React from "react";

const Table = props => {
  const { headerArray, bodyObject } = props;
  return (
    <table>
      <tr>{headerArray.map(item => <th>{item}</th>)}</tr>

      {bodyObject.map((item, index) => (
        <tbody key={index}>
          <tr>{Object.values(item).map(i => <td>{i}</td>)}</tr>
        </tbody>
      ))}
    </table>
  );
};

export default Table;
