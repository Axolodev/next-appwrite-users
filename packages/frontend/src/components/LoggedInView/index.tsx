import { useUser } from '../../hooks';
import UsersView from './UsersView';

const LoggedInView = () => {
  const { user } = useUser();

  return (
    <div className="w-4/5 md:w-1/2 mx-auto">
      <h3 className="font-bold text-4xl">
        Welcome, <span className="bg-yellow-400">{user.name}</span>!
      </h3>
      <div className="p-4"></div>
      <UsersView />
    </div>
  );
};

export default LoggedInView;
