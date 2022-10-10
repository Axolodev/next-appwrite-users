import { UserContextProvider } from '../components';
import Layout from '../components/layout';

import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}

export default MyApp;
