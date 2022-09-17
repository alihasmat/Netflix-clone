import { Container, Input, Text, Button, Form } from "./style";

export default function Search({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Search.Input = function SearchInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Search.Text = function SearchText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Search.Button = function SearchButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="get started" />
    </Button>
  );
};

Search.Form = function SearchForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};
