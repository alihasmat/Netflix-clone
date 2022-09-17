import { getByTestId, render } from "@testing-library/react";
import { Profiles } from "../../Components";

describe("<Profiles />", () => {
  it(`renders <Profiles /> with populated data`, () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src="/images/Hasmat.png"
              data-testid="profile-image"
            />
            <Profiles.Name>Hasmat</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );
    expect(getByText("Who's Watching?")).toBeTruthy();
    expect(getByTestId("profile-image")).toBeTruthy();
    expect(getByText("Hasmat")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it(`renders <Profile /> with mis image id`, () => {
    const { container, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture data-testid="profile-image-misc" />
            <Profiles.Name>Hasmat</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );
    expect(getByTestId("profile-image-misc")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
