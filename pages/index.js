import { useContext } from "react";
import Head from "next/head";

import { userContext } from "./_app";

import styles from "../styles/index.module.css";

const Home = ({ count }) => {
  const { user } = useContext(userContext);

  return (
    <>
      <Head>
        <title>Kakapo | Home</title>
      </Head>
      <div>Join the {count} other users who already love Kakapo!</div>
      <div className={styles.testing}></div>
    </>
  );
};

const getServerSideProps = async () => {
  try {
    const result = await fetch(`http://localhost:5000/api/v1/user/count`);
    const data = await result.json();
    return { props: { count: String(data.count) } };
  } catch (error) {
    return { props: { count: "-" } };
  }
};

export { getServerSideProps };
export default Home;
