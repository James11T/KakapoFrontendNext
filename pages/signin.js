import { useRouter } from "next/router";
import { useUser } from "../hooks/user";

import TextBox from "../components/TextBox/TextBox";
import Button from "../components/Button/Button";
import CheckBox from "../components/CheckBox/CheckBox";

import PersonRounded from "@mui/icons-material/PersonRounded";
import KeyRounded from "@mui/icons-material/KeyRounded";

import styles from "../styles/authpage.module.css";
import { useErrors } from "../hooks/errors";

const SignIn = () => {
  const router = useRouter();
  const { errors, setError, clearAllErrors } = useErrors();
  const { setUser } = useUser();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const body = {
      kakapo_id: event.target.kakapo_id.value,
      password: event.target.password.value,
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    clearAllErrors();

    fetch("http://localhost:5000/api/v1/auth/signin", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          switch (data.error) {
            case "104": {
              setError("kakapo_id", "Unknown Kakapo ID.");
              break;
            }
            case "400": {
              setError("password", "Incorrect password.");
              break;
            }
            default: {
              setError("general", data.message);
            }
          }
          return;
        }

        setUser({
          kakapo_id: data.user.kakapo_id,
          display_name: data.user.display_name,
          token: data.token,
          isAuthenticated: true,
        });

        const tokenStoreLocation = event.target.remember.checked
          ? localStorage
          : sessionStorage;

        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        tokenStoreLocation.setItem("token", data.token);

        router.push("/");
      })
      .catch((error) => {
        console.error(error);
        setError(
          "general",
          "An error occurred when contacting when the server."
        );
      });
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authPageArea}>
        <div className={styles.formHeading}>
          <h1>Sign In</h1>
          <p>Welcome back to Kakapo!</p>
        </div>
        <form onSubmit={handleOnSubmit}>
          <fieldset>
            <ul>
              <li>
                <TextBox
                  placeholder="BobSmith0"
                  label="Kakapo ID"
                  icon={PersonRounded}
                  name="kakapo_id"
                  focusIcon
                />
                <div className={styles.formError}>{errors.kakapo_id}</div>
              </li>
              <li>
                <TextBox
                  placeholder="password123"
                  label="Password"
                  icon={KeyRounded}
                  name="password"
                  focusIcon
                  password
                />
                <div className={styles.formError}>{errors.password}</div>
              </li>
              <li>
                <CheckBox defaultValue={true} name="remember" focusIcon>
                  Remember Me
                </CheckBox>
              </li>
              <li>
                <div className={styles.formError}>{errors.general}</div>
                <Button
                  type="submit"
                  icon={PersonRounded}
                  focusIcon
                  className={styles.signInButton}
                >
                  Sign In
                </Button>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
