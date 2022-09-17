import { Header } from "../Components";
import * as ROUTES from "../constants/Routes";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/Images/misc/logo.svg" alt="logo" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
      <Header.Gradient />
    </Header>
  );
}
