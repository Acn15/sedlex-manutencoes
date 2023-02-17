import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 7%;
`;

export const ContainerImage = styled.div`
  width: 50%;
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 285px;
  pointer-events: none;
`;

export const ContainerInformation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5%;
`;

export const WrapperInformation = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 30px;
  margin-top: 1rem;
`;

export const Title = styled.p`
  display: flex;
  font-weight: bold;
`;

export const Content = styled.p`
  display: flex;
  text-align: justify;
  border-radius: 1rem;
  line-height: 1.3em;
  padding: 1.3rem;
  color: #55606e;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Li = styled.li`
  color: #55606e;
  padding: 1rem;
`;
