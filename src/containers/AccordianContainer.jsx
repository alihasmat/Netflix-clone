import { Accordian } from "../Components";
import faqsData from "../fixtures/faqs.json";
import Search from "../Components/Search/Search";

export default function AccordianContainer() {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      {faqsData.map((item) => (
        <Accordian.Item key={item.id}>
          <Accordian.Header>{item.header}</Accordian.Header>
          <Accordian.Body>{item.body}</Accordian.Body>
        </Accordian.Item>
      ))}

      <Search>
        <Search.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </Search.Text>
        <Search.Form>
          <Search.Input placeholder="Email Address" />
          <Search.Button>Get Started</Search.Button>
        </Search.Form>
      </Search>
    </Accordian>
  );
}
