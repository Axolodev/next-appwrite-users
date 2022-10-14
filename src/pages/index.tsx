import * as React from 'react';
import LoggedInView from '../components/LoggedInView';
import { useUser } from '../hooks';

function Index() {
  const { user } = useUser();

  if (!user) return null;

  return <LoggedInView />;
}

export default Index;
