import { useRouter } from "next/router";

import styles from "../../styles/friendsList.module.css";

const FriendsList = () => {
  const router = useRouter();

  const { kakapo_id } = router.query;
  return <ul></ul>;
};

export default FriendsList;
