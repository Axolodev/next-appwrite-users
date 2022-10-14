import { useEffect } from 'react';
import { useUser } from '../hooks';

const LoggedInView = () => {
  const { user } = useUser();
  useEffect(() => {
    async function getAllUsers() {
      const response = await fetch('/api/users/all');
      console.log(await response.json());
    }

    getAllUsers();
  }, []);

  return (
    <div className="w-4/5 md:w-1/2 mx-auto">
      <h3 className="font-bold text-4xl">
        Welcome, <span className="bg-yellow-400">{user.name}</span>!
      </h3>
    </div>
  );
};

function Index() {
  const { user } = useUser();

  if (!user) return null;

  return <LoggedInView />;
}

export default Index;
