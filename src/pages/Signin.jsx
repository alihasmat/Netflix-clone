import { Header } from "../Components";
import FooterContainer from "../containers/FooterContainer";
import SignInContainer from "../containers/SignInContainer";
import * as ROUTES from "../constants/Routes";

export default function Signin() {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="/Images/misc/logo.svg"
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
