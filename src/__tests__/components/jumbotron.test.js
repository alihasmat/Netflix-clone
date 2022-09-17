import { getByAltText, render } from "@testing-library/react";
import { Jumbotron } from "../../Components";
import JumboData from "../../fixtures/jumbo.json";

describe("<Jumbotron />", () => {
  it(`renders <Jumbotron /> with populated data`, () => {
    const { container, getByText, getByTestId, getAllByAltText } = render(
      <Jumbotron.Container>
        {JumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <img
                src={item.image}
                alt={item.alt}
                data-testid={`${item.id}-jumbo-image`}
              />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );
    expect(getByText("Enjoy on your TV.")).toBeTruthy();
    expect(getAllByAltText("Tiger King on Netflix")).toBeTruthy();
    expect(
      getByText(
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      )
    ).toBeTruthy();
    expect(getByTestId("1-jumbo-image")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
