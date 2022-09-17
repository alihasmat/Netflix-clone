import { render } from "@testing-library/react";
import { Loading } from "../../Components";

describe("<Loading />", () => {
  it(`renders <Loading />`, () => {
    const { container, getByTestId } = render(
      <Loading src="/images/Hasmat.png" data-testid="loading" />
    );
    expect(getByTestId("loading")).toBeTruthy();
    expect(getByTestId("loading-picture")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it(`renders <loading /> releasebody`, () => {
    const { container } = render(<Loading.ReleaseBody data-testid="loading" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
