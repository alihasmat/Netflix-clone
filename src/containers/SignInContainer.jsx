import { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { useNavigate } from "react-router-dom";
import { Form } from "../Components";
import * as ROUTES from "../constants/Routes";

export default function SignInContainer() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const inValid = email === "" || password === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    // firebase works here
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        //push to routes using useNavigate
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <Form>
      <Form.Title>Sign In</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}

      <Form.Base onSubmit={handleSubmit} method="POST">
        <Form.Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Input
          type="password"
          placeholder="Passowrd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Submit disabled={inValid} type="submit">
          Sign In
        </Form.Submit>
        <Form.Text>
          New to Netflix?{" "}
          <Form.Link to={ROUTES.SIGN_UP}>Sign Up now.</Form.Link>
        </Form.Text>
        <Form.SmallText>
          This page is protected by Google reCAPTCHA
        </Form.SmallText>
      </Form.Base>
    </Form>
  );
}
