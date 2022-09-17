import { render, fireEvent } from "@testing-library/react";
import { Search } from "../../Components";

describe("<Search />", () => {
  it(`renders <Search />`, () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Search>
        <Search.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </Search.Text>
        <Search.Form>
          <Search.Input placeholder="Email Address" />
          <Search.Button>Get Started</Search.Button>
        </Search.Form>
      </Search>
    );
    expect(
      getByText(
        "Ready to watch? Enter your email to create or restart your membership."
      )
    ).toBeTruthy();
    expect(getByPlaceholderText("Email Address")).toBeTruthy();
    expect(getByText("Get Started")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
