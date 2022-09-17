import { render, fireEvent } from "@testing-library/react";
import { Accordian } from "../../Components";
import faqsData from "../../fixtures/faqs.json";

describe("<Accordian />", () => {
  it(`renders <Accordian /> with populated data.`, () => {
    const { container, getByText } = render(
      <Accordian>
        <Accordian.Title>Frequently Asked Questions</Accordian.Title>
        {faqsData.map((item) => (
          <Accordian.Item key={item.id}>
            <Accordian.Header>{item.header}</Accordian.Header>
            <Accordian.Body>{item.body}</Accordian.Body>
          </Accordian.Item>
        ))}
      </Accordian>
    );
    expect(getByText("Frequently Asked Questions")).toBeTruthy();
    expect(getByText("What is Netflix?")).toBeTruthy();
    expect(getByText("How much does Netflix cost?")).toBeTruthy();
    expect(getByText("Where can I watch?")).toBeTruthy();
    expect(getByText("How do I cancel?")).toBeTruthy();
    expect(getByText("What can I watch on Netflix?")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it(`opens and closes <Accordian /> component`, () => {
    const { container, queryByText } = render(
      <Accordian>
        <Accordian.Title>Frequently Asked Questions</Accordian.Title>
        {faqsData.map((item) => (
          <Accordian.Item key={item.id}>
            <Accordian.Header>{item.header}</Accordian.Header>
            <Accordian.Body>{item.body}</Accordian.Body>
          </Accordian.Item>
        ))}
      </Accordian>
    );
    const whatIsNetflixTextBody =
      "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

    expect(queryByText(whatIsNetflixTextBody)).toBeFalsy();
    fireEvent.click(queryByText("What is Netflix?"));
    expect(queryByText(whatIsNetflixTextBody)).toBeTruthy();

    fireEvent.click(queryByText("What is Netflix?"));
    expect(queryByText(whatIsNetflixTextBody)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
