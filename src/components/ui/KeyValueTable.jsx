import React from "react";

const KeyValueTable = ({ tableData, title }) => {
  if (!tableData || typeof tableData !== "object") return null;

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
          {Object.entries(tableData).map(([key, value]) => (
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
