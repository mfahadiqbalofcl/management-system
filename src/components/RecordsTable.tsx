import { ROWS_PERPAGE } from '../constants';

// RecordsTable component
// This component displays records in a table format with pagination
export default function RecordsTable() {
  // Use ROWS_PERPAGE constant for pagination
  const rowsPerPage = ROWS_PERPAGE;
  
  // Component implementation would go here
  return (
    <div>
      {/* Table implementation */}
      <p>Rows per page: {rowsPerPage}</p>
    </div>
  );
}
