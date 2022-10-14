import { useUser } from '../../hooks';

const LoggedInView = () => {
  const { logout } = useUser();

  return (
    <li>
      <button className="font-bold" onClick={logout}>
        Log Out
      </button>
    </li>
  );
};

export default LoggedInView;
