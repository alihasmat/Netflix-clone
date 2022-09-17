import { render, fireEvent } from "@testing-library/react";
import { Form } from "../../Components";

jest.mock("react-router-dom");

describe("<Form />", () => {
  it(`render <Form /> from populated data`, () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign Up Now</Form.Title>

        <Form.Base>
          <Form.Input
            type="text"
            placeholder="First Name"
            onChange={() => {}}
          />
          <Form.Input
            type="email"
            placeholder="Email Address"
            onChange={() => {}}
          />
          <Form.Input
            type="password"
            placeholder="password"
            onChange={() => {}}
          />
          <Form.Submit disabled type="submit">
            Sign Up
          </Form.Submit>
          <Form.Text>
            Already have an account. <Form.Link to="/signin">Sign In</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA.
          </Form.SmallText>
        </Form.Base>
      </Form>
    );
    expect(getByText("Sign Up Now")).toBeTruthy();
    expect(getByText("Already have an account.")).toBeTruthy();
    expect(
      getByText("This page is protected by Google reCAPTCHA.")
    ).toBeTruthy();
    expect(getByPlaceholderText("First Name")).toBeTruthy();
    expect(getByPlaceholderText("Email Address")).toBeTruthy();
    expect(getByPlaceholderText("password")).toBeTruthy();
    expect(getByText("Sign Up").disabled).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it(`render <Form /> with error`, () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Your email address is already being used</Form.Error>
        <Form.Submit type="submit">Sign In</Form.Submit>
      </Form>
    );
    expect(getByText("Your email address is already being used")).toBeTruthy();
    expect(queryByText("Sign In").disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
