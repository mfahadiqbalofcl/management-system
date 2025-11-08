import React from 'react';
import { ROWS_PERPAGE } from '../constants/pagination';

interface RecordsTableProps {
  data?: any[];
}

export const RecordsTable: React.FC<RecordsTableProps> = ({ data = [] }) => {
  const [page, setPage] = React.useState(0);
  
  const startIndex = page * ROWS_PERPAGE;
  const endIndex = startIndex + ROWS_PERPAGE;
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / ROWS_PERPAGE);

  return (
    <div className="records-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((record, index) => (
            <tr key={index}>
              <td>{startIndex + index + 1}</td>
              <td>{JSON.stringify(record)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button 
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
        >
          Previous
        </button>
        <span>
          Page {page + 1} of {totalPages || 1}
        </span>
        <button 
          onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
          disabled={page >= totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};
