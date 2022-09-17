import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  max-width: 815px;
  margin: 0 auto;
  padding: 75px 30px;
  display: flex;
  flex-direction: column;
  width: 75%;

  @media (max-width: 950px) {
    padding: 0 0 75px 0;
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  color: #fff;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`;

export const Item = styled.div`
  color: #fff;
  width: 100%;
  margin-inline: auto;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  font-size: 1.625rem;
  font-weight: normal;
  padding: 0.8em 1.2em 0.8em 1.2em;
  background: #303030;
  cursor: pointer;
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  user-select: none;
  align-items: center;

  img {
    width: 24px;
    filter: brightness(0) invert(1);
  }

  @media (max-width: 600px) {
    font-size: 1rem;

    img {
      width: 16px;
    }
  }
`;

export const Body = styled.div`
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 1.625rem;
  line-height: normal;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;
