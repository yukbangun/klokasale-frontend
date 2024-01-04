import { IconFilter, IconPlus } from '@douyinfe/semi-icons';
import { Button, Form, Pagination } from '@douyinfe/semi-ui';
import { FormApi } from '@douyinfe/semi-ui/lib/es/form';
import { useState } from 'react';
import ButtonDropdown from 'src/components/dropdown-button';
import FilterFields from 'src/components/filter-fields';
import { TFilterField } from 'src/types/filter';
import { TPagination } from 'src/types/pagination';
import { TSort, TSortOption } from 'src/types/sort';
import styles from './index.module.scss';
import { ELocalStorageKey } from 'src/constants/local-storage';

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
  const [showFiltersForm, setShowFiltersForm] = useState(false);
  const [formApi, setFormApi] = useState<FormApi>();

  function handleChangeSort(sort: TSort) {
    setSort(sort);
    onChangeSort?.(sort);
  }

  function handleToggleShowFiltersForm() {
    setShowFiltersForm(prevShowFiltersForm => !prevShowFiltersForm);
  }

  function handleSubmitFilters(values: Record<string, unknown>) {
    setFilters(values);
    onSubmitFilter?.(values);
  }

  function handleClearFilters() {
    formApi?.setValues(initialFilters);
    setFilters(initialFilters);
  }

  function handleChangePagination(currentPage: number) {
    setPagination(pagination => ({
      ...pagination,
      page: currentPage,
    }));
    onChangePagination?.(pagination);
  }

  function handleChangePageSize(pageSize: number) {
    localStorage.setItem(ELocalStorageKey.PageSize, `${pageSize}`);
  }

  const toolbar = (
    <div className={styles.toolbar}>
      <div className={styles.sortAndFilter}>
        <ButtonDropdown
          value={sort}
          options={sortOptions}
          onChange={(sort: unknown) => handleChangeSort(sort as TSort)}
        />
        <Button icon={<IconFilter />} onClick={handleToggleShowFiltersForm}>
          Filter
        </Button>
      </div>
      <Button theme="solid" icon={<IconPlus />} onClick={onClickAddNewData}>
        {addNewDataLabel}
      </Button>
    </div>
  );

  const filtersForm = (
    <div className={styles.filtersFormContainer}>
      <Form initValues={filters} getFormApi={(formApi: FormApi) => setFormApi(formApi)} onSubmit={handleSubmitFilters}>
        <FilterFields filterFields={filterFields} />
        <div className={styles.formFooterRight}>
          <Button type="tertiary" onClick={handleClearFilters}>
            Hapus
          </Button>
          <Button theme="solid" htmlType="submit">
            Konfirmasi
          </Button>
        </div>
      </Form>
    </div>
  );

  const paginationDisplay = (
    <Pagination
      total={80}
      currentPage={pagination.page}
      pageSize={pagination.pageSize}
      className={styles.pagination}
      popoverPosition="top"
      onChange={handleChangePagination}
      onPageSizeChange={handleChangePageSize}
      showSizeChanger
    ></Pagination>
  );

  return { sort, filters, pagination, showFiltersForm, toolbar, filtersForm, paginationDisplay };
}
