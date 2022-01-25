import TextTruncator from "../../components/TextTruncator/TextTruncator";

const ProfileView = ({ user }) => {
  return (
    <ul>
      {Object.keys(user).map((prop) => (
        <li key={prop}>
          <TextTruncator
            maxLength={48}
          >{`${prop}: ${user[prop]}`}</TextTruncator>
        </li>
      ))}
    </ul>
  );
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

  const res = await fetch(
    `http://localhost:5000/api/v1/user/${kakapo_id}`,
    fetchOptions
  );
  const data = await res.json();

  if (data.error) {
    switch (data.error) {
      case "104": {
        return {
          notFound: true,
        };
      }
      default: {
        return {
          props: {
            id: -1,
            kakapo_id: "Error",
            display_name: "Error",
            error: data.error,
          },
        };
      }
    }
  }

  return {
    props: {
      user: data.user,
    },
  };
};

export { getServerSideProps };
export default ProfileView;
