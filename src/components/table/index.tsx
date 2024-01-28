import { useState } from 'react';
import { SortDirectionType, TableProps } from './types';
import TableHeader from './table-header';

const Table = <T, K extends keyof T>({
  data,
  columns,
  emptyText = 'No data to show',
}: TableProps<T, K>) => {
  const [sortDirection, setSortDirection] =
    useState<SortDirectionType>('ASCENDING');

  const handleSort = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const sortKey = e.currentTarget.getAttribute(
      'data-sort'
    )! as keyof (typeof data)[number];
    sortItems(sortKey);
    toggleSortDirection();
  };

  const sortItems = (sortKey: keyof T) => {
    sortDirection === 'ASCENDING'
      ? data.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1))
      : data.sort((a, b) => (a[sortKey] < b[sortKey] ? 1 : -1));
  };

  const toggleSortDirection = () =>
    sortDirection === 'ASCENDING'
      ? setSortDirection('DESCENDING')
      : setSortDirection('ASCENDING');

  return (
    <>
      <table className='border-collapse' style={{ width: '80%' }}>
        <thead>
          <tr>
            <TableHeader
              columns={columns}
              sortDirection={sortDirection}
              handleSort={handleSort}
            />
          </tr>
        </thead>
        {data ? (
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={`row-${rowIndex}`}
                className='border-solid border-2'
                style={{
                  backgroundColor:
                    rowIndex === 0 || rowIndex % 2 === 0 ? '#f3f6f4' : 'white',
                }}
              >
                {columns.map((column, columnIndex) => (
                  <td key={`cell-${columnIndex}-${rowIndex}`} className='p-2'>
                    {column.key === 'options'
                      ? column.optionsCol
                      : (row[column.key] as string)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          emptyText
        )}
      </table>
    </>
  );
};

export default Table;
