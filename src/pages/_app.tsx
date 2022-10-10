import { useState } from "react";
import Layout from "../components/layout";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  return (
    <Layout user={user} setUser={setUser}>
      <Component user={user} {...pageProps} />
    </Layout>
  );
}

export default MyApp;
