import { useContext } from "react";
import { userContext } from "../pages/_app";

const useUser = () => {
  const { user, setUser } = useContext(userContext);

  return [user, setUser];
};

export { useUser };
