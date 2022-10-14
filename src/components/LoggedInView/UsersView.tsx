import { getAllUsers } from '../../utils';
import useSWR from 'swr';
import Link from 'next/link';

const TD = ({ children }) => (
  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
    {children}
  </td>
);

const TH = ({ children }) => (
  <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
    {children}
  </th>
);

const UsersView = () => {
  const { data: users, error } = useSWR('/api/getUsers', getAllUsers);

  if (error) return <div className="p-3">Failed to load</div>;

  if (!users) return <div className="p-3">Loading...</div>;

  return (
    <table className="border-collapse table-auto w-full text-sm">
      <thead>
        <tr>
          <TH>Email</TH>
          <TH>Name</TH>
          <TH> </TH>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-slate-800">
        {users?.map((user) => (
          <tr key={user.id}>
            <TD>{user.email}</TD>
            <TD>{user.name}</TD>
            <TD>
              <Link href={`/user/${user.id}`}>
                <a className="text-blue-500 hover:text-blue-600">View User</a>
              </Link>
            </TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersView;
