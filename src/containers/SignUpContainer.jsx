import { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/Routes";
import { Form } from "../Components";

export default function SignUpContainer() {
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const inValid = firstName === "" || email === "" || password === "";

  const handleSignUp = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE);
          })
          .catch((error) => {
            setEmail("");
            setPassword("");
            setError(error.message);
          });
      });
  };

  return (
    <Form>
      <Form.Title>Sign Up</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}

      <Form.Base onSubmit={handleSignUp} method="POST">
        <Form.Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Submit disabled={inValid} type="submit">
          Sign Up
        </Form.Submit>
        <Form.Text>
          Already have an account.{" "}
          <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
        </Form.Text>
        <Form.SmallText>
          This page is protected by Google reCAPTCHA.
        </Form.SmallText>
      </Form.Base>
    </Form>
  );
}
