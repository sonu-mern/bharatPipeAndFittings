import React from "react";
import { hasEmptyKey } from "../../utils/helperFunction";

const KeyValueTable = ({ tableData, title }) => {
  const isEmptyData =
    !tableData ||
    typeof tableData !== "object" ||
    Object.keys(tableData).length === 0 ||
    Object.values(tableData).every(
      (v) => v === "" || v === null || v === undefined
    );

  if (isEmptyData || hasEmptyKey(tableData)) {
    return <div style={{ margin: "10px 0" }}></div>;
  }

  // Now it's safe to run Object.entries
  const filteredEntries = Object.entries(tableData).filter(
    ([, value]) => value !== "" && value !== null && value !== undefined
  );

  if (filteredEntries.length === 0) {
    return <div style={{ margin: "10px 0" }}></div>;
  }

  return (
    <div style={{ overflowX: "auto", margin: "20px 0" }}>
      {title && <h2 style={{ marginBottom: "10px" }}>{title}</h2>}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Specification
            </th>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map(([key, value]) => (
            <tr key={key}>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                {key}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeyValueTable;
