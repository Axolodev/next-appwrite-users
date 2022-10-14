import * as React from 'react';
import Head from 'next/head';
import LoggedInView from '../components/LoggedInView';
import { useUser } from '../hooks';

function Index() {
  const { user } = useUser();
  const title = user ? `Welcome, ${user.name}!` : 'Home';

  return (
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      {user ? <LoggedInView /> : "You're not logged in"}
    </div>
  );
}

export default Index;
