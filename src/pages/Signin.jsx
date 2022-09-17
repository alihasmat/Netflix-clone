import { Header } from "../Components";
import { SignInContainer, FooterContainer } from "../containers";
import * as ROUTES from "../constants/Routes";

export default function Signin() {
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
        <SignInContainer />
        <Header.Gradient />
      </Header>

      <FooterContainer />
    </>
  );
}
