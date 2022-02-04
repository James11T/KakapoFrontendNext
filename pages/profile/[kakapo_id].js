import Link from "next/link";

import Post from "../../components/Post/Post";

import styles from "../../styles/profileView.module.css";

const testPost = {
  content: "Test Content ".repeat(20),
  author: {
    kakapo_id: "kakapo_id",
    display_name: "display name",
  },
};

const ProfileView = ({ user }) => {
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
          <div className={styles.userAbout}>
            <h3>About</h3>
            <div className={styles.userAboutContent}>{user.about}</div>
          </div>
        )}
        <div className={styles.userPosts}>
          <h3>Posts</h3>
          <ul>
            <Post post={testPost} />
          </ul>
        </div>
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

const getErrorCodeResponse = (errorCode) => {
  switch (errorCode) {
    case 404: {
      return {
        notFound: true,
      };
    }
    default: {
      return errorProfile;
    }
  }
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

    const data = await res.json();

    if (res.ok) {
      return {
        props: {
          user: data.user,
        },
      };
    } else {
      return {
        props: {
          user: getErrorCodeResponse(res.status),
        },
      };
    }
  } catch {
    return getErrorCodeResponse(500);
  }
};

export { getServerSideProps };
export default ProfileView;
