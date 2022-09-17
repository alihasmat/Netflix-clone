import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 70px 45px;

  @media (max-width: 950px) {
    padding: 70px 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  color: #757575;
  cursor: pointer;
  font-size: 0.8125rem;
  margin-bottom: 16px;
  text-decoration: none;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  margin-bottom: 40px;
  a {
    font-size: 1rem;
    color: #757575;
  }
`;

export const Text = styled.p`
  font-size: 0.8125rem;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
