import Link from 'next/link';
import { useUser } from '../../hooks';

const LoggedInView = () => {
  const { logout } = useUser();

  return (
    <li>
      <Link href="/">
        <a className="text-blue-500 hover:text-blue-600 p-4">Home</a>
      </Link>
      <Link href="/user/me">
        <a className="text-blue-500 hover:text-blue-600 p-4">My Profile</a>
      </Link>
      <button
        className="text-blue-500 hover:text-blue-600 p-4"
        onClick={logout}
      >
        Log Out
      </button>
    </li>
  );
};

export default LoggedInView;
