import { useState, createContext } from "react";

import Head from "next/head";
import Container from "../components/Container/Container";
import Nav from "../components/nav/Nav";
import "../styles/globals.css";

const userContext = createContext();

const App = ({ Component, pageProps }) => {
  const [user, setUser] = useState({
    kakapo_id: "",
    display_name: "",
    token: "",
    isAuthenticated: false,
  });

  return (
    <>
      <Head>
        <title>Kakapo</title>
        <meta name="description" content="Kakapo Social Platform" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
      </Head>
      <userContext.Provider value={{ user, setUser }}>
        <Nav />
        <Container>
          <Component {...pageProps} />
        </Container>
      </userContext.Provider>
    </>
  );
};

export { userContext };
export default App;
