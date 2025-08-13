import React from 'react';

const ReportTable = ({ data }) => {
  return (
    <table border="2" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Sales ($)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.sales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
