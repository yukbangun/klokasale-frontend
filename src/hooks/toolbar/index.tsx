import { IconPlus } from '@douyinfe/semi-icons';
import { Button, Pagination } from '@douyinfe/semi-ui';
import { useState } from 'react';
import ButtonDropdown from 'src/components/dropdown-button';
import { TFilterField } from 'src/types/filter';
import { TPagination } from 'src/types/pagination';
import { TSort, TSortOption } from 'src/types/sort';
import styles from './index.module.scss';

type TProps = {
  initialSort: TSort;
  sortOptions: TSortOption[];
  onChangeSort?: (value: TSort) => void;
  initialFilters: Record<string, unknown>;
  filterFields: TFilterField[];
  onSubmitFilter?: (filters: Record<string, unknown>) => void;
  addNewDataLabel: string;
  onClickAddNewData?: () => void;
  initialPagination: TPagination;
  onChangePagination?: (pagination: TPagination) => void;
};

export default function useToolbar(props: TProps) {
  const {
    initialSort,
    sortOptions,
    onChangeSort,
    initialFilters,
    filterFields,
    onSubmitFilter,
    addNewDataLabel,
    onClickAddNewData,
    initialPagination,
    onChangePagination,
  } = props;

  const [sort, setSort] = useState<TSort>(initialSort);
  const [filters, setFilters] = useState<Record<string, unknown>>(initialFilters);
  const [pagination, setPagination] = useState<TPagination>(initialPagination);

  function handleChangeSort(sort: TSort) {
    setSort(sort);
    onChangeSort?.(sort);
  }

  function handleChangePagination(currentPage: number) {
    setPagination(pagination => ({
      ...pagination,
      page: currentPage,
    }));
    onChangePagination?.(pagination);
  }

  const toolbar = (
    <div className={styles.toolbar}>
      <div className={styles.sortAndFilter}>
        <ButtonDropdown
          value={sort}
          options={sortOptions}
          onChange={(sort: unknown) => handleChangeSort(sort as TSort)}
        />
      </div>
      <Button theme="solid" icon={<IconPlus />} onClick={onClickAddNewData}>
        {addNewDataLabel}
      </Button>
    </div>
  );

  const paginationDisplay = (
    <Pagination
      total={80}
      currentPage={pagination.page}
      className={styles.pagination}
      popoverPosition="top"
      onChange={handleChangePagination}
    ></Pagination>
  );

  return { toolbar, sort, filters, pagination, paginationDisplay };
}
