import Link from "next/link";
import { useEffect } from "react";

import { usePostView } from "../../hooks/postview";
import PostThumbnail from "../../components/PostThumbnail/PostThumbnail";

import styles from "../../styles/profileView.module.css";

const ProfileView = ({ user }) => {
  const { setPost } = usePostView();
  useEffect(() => {
    setPost(
      {
        author: {
          display_name: "James",
          kakapo_id: "James",
        },
        content: "Hello",
      },
      true
    );
  }, []);

  return (
    <div className={styles.profileView}>
      <header>
        <img src="/pfp.png" alt="user profile" className={styles.userPfp} />
        <div className={styles.headerContent}>
          <h1 className={styles.userDisplayName}>{user.display_name}</h1>
          <h2 className={styles.userKakapoID}>@{user.kakapo_id}</h2>
          <div className={styles.userFriendCount}>
            <Link href={`/friends/${user.kakapo_id}`}>0 Friends</Link>
          </div>
        </div>
        <div className={styles.headerEnd}></div>
      </header>
      <main>
        {user.about && (
          <section className={styles.userAbout}>
            <h3>About</h3>
            <div className={styles.userAboutContent}>{user.about}</div>
          </section>
        )}
        <section className={styles.userPosts}>
          <h3>Posts</h3>
          <ul>
            <li>
              <PostThumbnail />
            </li>
            <li>
              <PostThumbnail />
            </li>
            <li>
              <PostThumbnail />
            </li>
            <li>
              <PostThumbnail />
            </li>
            <li>
              <PostThumbnail />
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

const errorProfile = {
  props: {
    user: {
      id: -1,
      kakapo_id: "Error",
      display_name: "Error",
    },
  },
};

const getServerSideProps = async (ctx) => {
  const { kakapo_id } = ctx.query;

  if (!kakapo_id || kakapo_id.length === 0) return;

  const fetchOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/user/${kakapo_id}`,
      fetchOptions
    );

    if (res.ok) {
      const data = await res.json();
      return {
        props: {
          user: data.user,
        },
      };
    }

    if (res.status === "404") {
      return {
        notFound: true,
      };
    }
  } catch {
    return {
      props: {
        errorStatus: res.status,
      },
    };
  }
};

export { getServerSideProps };
export default ProfileView;
