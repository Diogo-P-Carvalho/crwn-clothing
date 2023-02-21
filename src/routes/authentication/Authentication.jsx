import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

import "./Authentication.scss";

export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
