import * as React from 'react';
import LoggedInView from './LoggedInView';
import LoggedOutView from './LogedOutView';
import { useUser } from '../../hooks';

export default function Nav() {
  const { user } = useUser();

  return (
    <nav className="container mx-auto">
      <ul className="flex justify-end items-center p-8">
        {user ? <LoggedInView /> : <LoggedOutView />}
      </ul>
    </nav>
  );
}
