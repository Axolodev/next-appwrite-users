import { logout } from '../../utils';

const LoggedInView = () => (
  <li>
    <button className="font-bold" onClick={logout}>
      Log Out
    </button>
  </li>
);

export default LoggedInView;
