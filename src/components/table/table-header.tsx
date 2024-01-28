import Icon from '../icon';
import { Columns, SortDirectionType } from './types';

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<Columns<T, K>>;
  sortDirection: SortDirectionType;
  handleSort: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const TableHeader = <T, K extends keyof T>({
  columns,
  sortDirection,
  handleSort,
}: TableHeaderProps<T, K>) => {
  return columns.map((column) => (
    <th
      key={column.key as string}
      data-sort={column.key}
      className='p-2 text-center'
      onClick={column.sortable ? (e) => handleSort(e) : undefined}
    >
      <div className='flex'>
        <p>{column.header}</p>
        {column.sortable ? (
          <div className='flex flex-col cursor-pointer'>
            {sortDirection === 'ASCENDING' ? (
              <Icon name='ascending' />
            ) : (
              <Icon name='descending' />
            )}
          </div>
        ) : null}
      </div>
    </th>
  ));
};

export default TableHeader;
