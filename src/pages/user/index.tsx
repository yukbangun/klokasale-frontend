import { IconDelete, IconEdit, IconLock } from '@douyinfe/semi-icons';
import { IllustrationNoContent } from '@douyinfe/semi-illustrations';
import { Button, Empty, Table, Tooltip, Typography } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { useEffect, useState } from 'react';
import { DEFAULT_SORT } from 'src/constants/sort';
import { USERNAME_FILTER_FIELDS } from 'src/constants/user/filter';
import { USER_SORT_OPTIONS } from 'src/constants/user/sort';
import useToolbar from 'src/hooks/toolbar';
import useAddUser from 'src/hooks/user/add-user';
import useDeleteUser from 'src/hooks/user/delete-user';
import useEditUser from 'src/hooks/user/edit-user';
import useResetUserPassword from 'src/hooks/user/reset-user-password';
import styles from './index.module.scss';

const { Title, Text } = Typography;

export default function UserPage() {
  const [userList, setUserList] = useState<unknown[]>([]);
  const { addUserForm, handleShowAddUserForm } = useAddUser({});
  const { editUserForm, handleShowEditUserForm } = useEditUser({});
  const { deleteUserModal, handleShowDeleteUserModal } = useDeleteUser({});
  const { resetUserPasswordForm, handleShowResetUserPasswordForm } = useResetUserPassword({});
  const { sort, filters, pagination, showFiltersForm, toolbar, filtersForm, paginationDisplay } = useToolbar({
    initialSort: DEFAULT_SORT,
    sortOptions: USER_SORT_OPTIONS,
    initialFilters: { username: undefined, name: undefined },
    filterFields: USERNAME_FILTER_FIELDS,
    addNewDataLabel: 'Tambah User',
    onClickAddNewData: handleShowAddUserForm,
    initialPagination: { page: 1 },
  });

  const columns: ColumnProps[] = [
    {
      title: 'Username',
      dataIndex: 'username',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      title: 'Nama',
      dataIndex: 'name',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      title: 'No Telp',
      dataIndex: 'phoneNumber',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      title: 'Alamat',
      dataIndex: 'address',
      render: text => {
        return <Text ellipsis={{ showTooltip: true }}>{text}</Text>;
      },
    },
    {
      fixed: 'right',
      render: (_: unknown, record: Record<string, unknown>) => {
        const { username, name, address, phoneNumber } = record || {};
        return (
          <div className={styles.editAndDeleteContainer}>
            <Button
              icon={<IconEdit />}
              onClick={() => handleShowEditUserForm({ username, name, address, phoneNumber })}
            />
            <Button
              icon={<IconDelete />}
              onClick={() => handleShowDeleteUserModal([{ username, name, address, phoneNumber }])}
            />
            <Tooltip content="Reset Password">
              <Button icon={<IconLock />} onClick={() => handleShowResetUserPasswordForm(username as string)} />
            </Tooltip>
          </div>
        );
      },
    },
  ];

  function getUserList() {}
  function updateUserList() {}

  useEffect(() => {}, []);

  return (
    <div className={styles.userPage}>
      <Title heading={1}>User</Title>
      <div className={styles.userContainer}>
        {toolbar}
        {showFiltersForm && filtersForm}
        <Table
          className={styles.userTable}
          columns={columns}
          pagination={false}
          dataSource={[
            {
              username: 'bambang1234',
              name: 'Bambang dhsfjhdnfkdgn ghldsjgnlhdgksfndg fhgojsngjk .dslghsjkn,gsfluigh,bsjf ghglik,dfbgliudkjfg',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
            {
              username: 'bambang1234',
              name: 'Bambang',
              phoneNumber: '+6282162174879',
              address: 'Jl. Soekarno No 102B',
            },
          ]}
          empty={
            <Empty image={<IllustrationNoContent className={styles.noDataDisplay} />} description={'Belum ada user'} />
          }
        />
        {paginationDisplay}
      </div>
      {addUserForm}
      {editUserForm}
      {deleteUserModal}
      {resetUserPasswordForm}
    </div>
  );
}
