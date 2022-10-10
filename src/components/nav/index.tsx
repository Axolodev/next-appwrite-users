import * as React from 'react';
import LoggedInView from './LoggedInView';
import LoggedOutView from './LogedOutView';

export default function Nav({ user }) {
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-end items-center p-8">
        {user ? <LoggedInView /> : <LoggedOutView />}
      </ul>
    </nav>
  );
}
