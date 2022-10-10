import Link from 'next/link';

const LoggedOutView = () => (
  <>
    <li>
      <Link href="/login">
        <a className="font-bold mx-2">Log In</a>
      </Link>
    </li>
    <li>
      <Link href="/signup">
        <a className="btn-yellow mx-2">Sign Up</a>
      </Link>
    </li>
  </>
);

export default LoggedOutView;
