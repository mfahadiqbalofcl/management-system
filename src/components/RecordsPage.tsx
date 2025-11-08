import React from 'react';
import { RecordsTable } from './RecordsTable';

export const RecordsPage: React.FC = () => {
  // Sample data for demonstration
  const sampleRecords = [
    { id: 1, name: 'Record 1', status: 'active' },
    { id: 2, name: 'Record 2', status: 'inactive' },
    { id: 3, name: 'Record 3', status: 'active' },
    { id: 4, name: 'Record 4', status: 'pending' },
    { id: 5, name: 'Record 5', status: 'active' },
  ];

  return (
    <div className="records-page">
      <h1>Records</h1>
      <RecordsTable data={sampleRecords} />
    </div>
  );
};
