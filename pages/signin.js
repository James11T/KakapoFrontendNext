import { useState, useContext } from "react";

import { userContext } from "./_app";

import TextBox from "../components/TextBox/TextBox";
import Button from "../components/Button/Button";
import CheckBox from "../components/CheckBox/CheckBox";

import styles from "../styles/signin.module.css";

const SignIn = () => {
  const [formErrors, setFormErrors] = useState({ kakapo_id: "", password: "" });
  const { user, setUser } = useContext(userContext);

  const updateFormError = (field, error) => {
    return setFormErrors((old) => ({ ...old, [field]: error }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const body = {
      kakapo_id: event.target.kakapo_id.value,
      password: event.target.password.value,
      remember: event.target.remember.checked,
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:5000/api/v1/auth/signin", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          switch (data.error) {
            case "104": {
              updateFormError("kakapo_id", "Unknown Kakapo ID.");
              break;
            }
            case "400": {
              updateFormError("password", "Incorrect password.");
              break;
            }
            default: {
              updateFormError("general", data.message);
            }
          }
          return;
        }
        if (data.success) {
          setUser({
            kakapo_id: data.user.kakapo_id,
            display_name: data.user.display_name,
            token: data.token,
            isAuthenticated: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        updateFormError(
          "general",
          "An error occurred when contacting the server."
        );
      });
  };

  return (
    <div className={styles.signIn}>
      <div className={styles.signInArea}>
        <div className={styles.formHeading}>
          <h1>Sign In</h1>
          <p>Welcome back to Kakapo!</p>
        </div>
        <form onSubmit={handleOnSubmit} className={styles.signInForm}>
          <fieldset>
            <ul>
              <li>
                <TextBox
                  placeholder="BobSmith0"
                  label="Kakapo ID"
                  icon="person"
                  name="kakapo_id"
                  focusIcon
                />
                <div className={styles.formError}>{formErrors.kakapo_id}</div>
              </li>
              <li>
                <TextBox
                  placeholder="password123"
                  label="Password"
                  icon="key"
                  name="password"
                  focusIcon
                  password
                />
                <div className={styles.formError}>{formErrors.password}</div>
              </li>
              <li>
                <CheckBox defaultValue={true} name="remember" focusIcon>
                  Remember Me
                </CheckBox>
              </li>
              <li>
                <div className={styles.formError}>{formErrors.general}</div>
                <Button
                  type="submit"
                  icon="signin"
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
