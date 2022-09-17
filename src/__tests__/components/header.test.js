import { fireEvent, render } from "@testing-library/react";
import { Header } from "../../Components";

jest.mock("react-router-dom");

describe("<Header />", () => {
  it("renders basic <Header /> with background", () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/Images/misc/logo.svg" alt="logo"></Header.Logo>
          <Header.TextLink active={true}>Hello I am a link.</Header.TextLink>
        </Header.Frame>
      </Header>
    );
    expect(getByText("Hello I am a link.")).toBeTruthy();
    expect(getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders basic <Header /> without background", () => {
    const { container, getByText, queryByTestId } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src="/Images/misc/logo.svg" alt="logo"></Header.Logo>
          <Header.ButtonLink>Sign In</Header.ButtonLink>
          <Header.TextLink active={false}>Hello I am a link.</Header.TextLink>
        </Header.Frame>
      </Header>
    );
    expect(getByText("Hello I am a link.")).toBeTruthy();
    expect(queryByTestId("header-bg")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it(`renders <Header /> page test`, () => {
    const { container, getByText, getByTestId } = render(
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src="/Images/misc/logo.svg" alt="logo" />
            <Header.TextLink active={false} onClick={() => {}}>
              Series
            </Header.TextLink>
            <Header.TextLink active={false} onClick={() => {}}>
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search>
              <Header.SearchIcon onClick={() => {}}>
                <img src="images/icons/search.png" />
              </Header.SearchIcon>
              <Header.SearchInput
                value="Joker"
                placeholder="Search..."
                onChange={() => {}}
              />
            </Header.Search>

            <Header.Profile>
              <Header.Picture src="/images/Hasmat.png" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/Hasmat.png" />
                  <Header.TextLink active={false}>Hasmat Ali</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink active={false} onClick={() => {}}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>Forever alone in a crowd..</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>

        <Header.Gradient />
      </Header>
    );
    expect(getByText("Series")).toBeTruthy();
    expect(getByText("Films")).toBeTruthy();

    expect(getByTestId("search-input")).toBeTruthy();
    expect(getByTestId("search-input").value).toBe("Joker");
    fireEvent.change(getByTestId("search-input"), {
      target: { value: "Simpsons" },
    });
    fireEvent.click(getByTestId("search-click"));

    expect(getByText("Hasmat Ali")).toBeTruthy();
    expect(getByText("Sign out")).toBeTruthy();
    expect(getByText("Watch Joker Now")).toBeTruthy();
    expect(getByText("Forever alone in a crowd..")).toBeTruthy();
    expect(getByText("Play")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
