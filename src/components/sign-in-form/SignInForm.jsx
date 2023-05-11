import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import {
//   googleSignInStart,
//   emailSignInStart,
// } from "../../store/user/user.action";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.slice";

import FormInput from "../form-input/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import { SignInContainer, ButtonsContainer } from "./SignInFormStyles";
import { selectCurrentUser, selectError } from "../../store/user/user.selector";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const currentUser = useSelector(selectCurrentUser);
  const error = useSelector(selectError);

  console.log("SignInForm RENDER", currentUser, error);

  useEffect(() => {
    console.log("EFFECT", currentUser, error);
  }, [currentUser, error]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // create user
    try {
      dispatch(emailSignInStart({ email, password }));
      console.log("AFTER DISPATCH");
      //resetFormFields();
    } catch (error) {
      console.log("SINGIN FORM ERROR", error);
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        alert("incorrect email or password");
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          minLength="6"
          autoComplete="on"
          required
          onChange={handleChange}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}
