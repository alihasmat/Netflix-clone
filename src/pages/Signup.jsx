import { Header } from "../Components";
import { SignUpContainer } from "../containers";
import * as ROUTES from "../constants/Routes";

export default function Signup() {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="/images/misc/logo.svg"
            alt="logo"
          />
        </Header.Frame>
        <SignUpContainer />

        <Header.Gradient />
      </Header>
    </>
  );
}
