import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2em;
  background-color: #1184e0;
  width: 100vw;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
`;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Image = styled.img`
  width: 150px;
`;

export const WrapperBurguer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  opacity: 0.8;
`;
