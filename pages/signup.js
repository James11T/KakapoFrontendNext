import { useRouter } from "next/router";

import TextBox from "../components/TextBox/TextBox";
import Button from "../components/Button/Button";
import CheckBox from "../components/CheckBox/CheckBox";

import PersonRounded from "@mui/icons-material/PersonRounded";
import EmailRounded from "@mui/icons-material/AlternateEmailRounded";
import KeyRounded from "@mui/icons-material/KeyRounded";

import styles from "../styles/authpage.module.css";
import { useErrors } from "../hooks/errors";

const SignUp = () => {
  const router = useRouter();
  const { errors, setError, clearAllErrors } = useErrors();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const body = {
      kakapo_id: event.target.kakapo_id.value,
      password: event.target.password.value,
      email: event.target.email.value,
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

    fetch("http://localhost:5000/api/v1/auth/signup", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          switch (data.error) {
            case "101": {
              console.log(data.badParameters[0]);
              setError(data.badParameters[0], "Invalid value");
              break;
            }
            case "114": {
              setError("kakapo_id", "This Kakapo ID is already taken.");
              break;
            }
            default: {
              setError("general", data.message);
            }
          }
          return;
        }
        if (data.success) {
          router.push("/");
        }
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
          <h1>Sign Up</h1>
          <p>Create a new Kakapo account!</p>
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
                  placeholder="example@kakaposocial.com"
                  label="Email"
                  icon={EmailRounded}
                  name="email"
                  focusIcon
                />
                <div className={styles.formError}>{errors.email}</div>
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
                <TextBox
                  placeholder="password123"
                  label="Confirm Password"
                  icon={KeyRounded}
                  name="confirmpassword"
                  focusIcon
                  password
                />
                <div className={styles.formError}>{errors.confirmPassword}</div>
              </li>
              <li>
                <CheckBox defaultValue={true} name="remember" focusIcon>
                  Recieve email updates
                </CheckBox>
              </li>
              <li>
                <div className={styles.formError}>{errors.general}</div>
                <Button
                  type="submit"
                  icon={PersonRounded}
                  focusIcon
                  className={styles.signUpButton}
                >
                  Sign Up
                </Button>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
