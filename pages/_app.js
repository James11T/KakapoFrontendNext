import { useState, createContext, useEffect } from "react";
import Head from "next/head";

import Container from "../components/Container/Container";
import Nav from "../components/nav/Nav";
import TopBar from "../components/TopBar/TopBar";

import "../styles/globals.css";

const userContext = createContext();

const App = ({ Component, pageProps }) => {
  const [navOpen, setNavOpen] = useState(false);

  const [user, setUser] = useState({
    kakapo_id: "",
    display_name: "",
    token: "",
    isAuthenticated: false,
  });

  useEffect(() => {
    // Check for token is localStorage and sessionStorage
    // Check validity

    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      const fetchConfig = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      console.log("Fetching user from storage");
      fetch("http://localhost:5000/api/v1/user/me", fetchConfig)
        .then((res) => res.json())
        .then((data) => {
          if (data.error || !data.user) {
            return;
          }

          setUser({
            kakapo_id: data.user.kakapo_id,
            display_name: data.user.display_name,
            token: token,
            isAuthenticated: true,
          });
        })
        .catch((error) => {});
    }
  }, []);

  const handleNavToggle = (event) => {
    setNavOpen((old) => !old);
  };

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
        <Nav open={navOpen} />
        <TopBar toggleNav={handleNavToggle} navOpen={navOpen} />
        <Container>
          <Component {...pageProps} />
        </Container>
      </userContext.Provider>
    </>
  );
};

export { userContext };
export default App;
