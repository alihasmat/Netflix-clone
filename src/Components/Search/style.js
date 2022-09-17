import styled from "styled-components/macro";

export const Container = styled.div`
  margin-top: 36px;

  @media (max-width: 805px) {
    margin-top: 20px;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 805px) {
    line-height: 22px;
    margin-bottom: 0;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 805px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 20px 25px;

  @media (max-width: 805px) {
    max-width: 550px;
    margin: 10px auto;
    padding: 15px 30px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #e50914;
  color: #fff;
  padding: 13px 25px;
  font-size: 1.625rem;
  border: 0;
  border-left: 1px solid #333;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 1.3rem;

    @media (max-width: 1000px) {
      width: 1rem;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 805px) {
    padding: 10px 25px;
    font-size: 1.125rem;
  }
`;
