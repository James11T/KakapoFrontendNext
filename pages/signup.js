import { useState } from "react";
import { useRouter } from "next/router";

import TextBox from "../components/TextBox/TextBox";
import Button from "../components/Button/Button";
import CheckBox from "../components/CheckBox/CheckBox";

import styles from "../styles/signup.module.css";

const SignUp = () => {
  const router = useRouter();

  const defaultErrors = {
    kakapo_id: "",
    email: "",
    password: "",
    general: "",
  };
  const [formErrors, setFormErrors] = useState(defaultErrors);

  const updateFormError = (field, error) => {
    return setFormErrors((old) => ({ ...old, [field]: error }));
  };

  const clearFormErrors = () => {
    return setFormErrors(defaultErrors);
  };

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

    clearFormErrors();

    fetch("http://localhost:5000/api/v1/auth/signup", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          switch (data.error) {
            case "101": {
              console.log(data.badParameters[0]);
              updateFormError(data.badParameters[0], "Invalid value");
              break;
            }
            case "114": {
              updateFormError("kakapo_id", "This Kakapo ID is already taken.");
              break;
            }
            default: {
              updateFormError("general", data.message);
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
        updateFormError(
          "general",
          "An error occurred when contacting when the server."
        );
      });
  };

  return (
    <div className={styles.signUp}>
      <div className={styles.signUpArea}>
        <div className={styles.formHeading}>
          <h1>Sign Up</h1>
          <p>Create a new Kakapo account!</p>
        </div>
        <form onSubmit={handleOnSubmit} className={styles.signUpForm}>
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
                  placeholder="example@kakaposocial.com"
                  label="Email"
                  icon="email"
                  name="email"
                  focusIcon
                />
                <div className={styles.formError}>{formErrors.email}</div>
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
                <TextBox
                  placeholder="password123"
                  label="Confirm Password"
                  icon="key"
                  name="confirmpassword"
                  focusIcon
                  password
                />
                <div className={styles.formError}>
                  {formErrors.confirmPassword}
                </div>
              </li>
              <li>
                <CheckBox defaultValue={true} name="remember" focusIcon>
                  Recieve email updates
                </CheckBox>
              </li>
              <li>
                <div className={styles.formError}>{formErrors.general}</div>
                <Button
                  type="submit"
                  icon="personAdd"
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
