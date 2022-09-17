import JumboContainer from "../containers/JumboContainer";
import AccordianContainer from "../containers/AccordianContainer";
import { HeaderContainer, FooterContainer } from "../containers";
import Feature from "../Components/Feature/Feature";
import Search from "../Components/Search/Search";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies. TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

          <Search>
            <Search.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Search.Text>
            <Search.Form>
              <Search.Input placeholder="Email Address" />
              <Search.Button>Get Started</Search.Button>
            </Search.Form>
          </Search>
        </Feature>
      </HeaderContainer>
      <JumboContainer />
      <AccordianContainer />
      <FooterContainer />
    </>
  );
}
