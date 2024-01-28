export type Columns<T, K extends keyof T> = {
  key: K;
  header?: string;
  sortable?: boolean;
  optionsCol?: React.ReactNode;
  withSearch?: boolean;
};

export type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<Columns<T, K>>;
  emptyText?: string;
};

export type SortDirectionType = 'ASCENDING' | 'DESCENDING';
