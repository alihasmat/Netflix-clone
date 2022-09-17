import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 165px 45px;
  border-bottom: 8px solid #222;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3.125rem;
  font-weight: 500;
  margin: auto;
  max-width: 640px;
  line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 1.625rem;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`;
