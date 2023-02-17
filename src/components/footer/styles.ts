import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1184e0;
  width: 100vw;
  box-shadow: -1em 0 0.4em rgba(0, 0, 0, 0.4);
`;

export const General = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  padding: 1rem;
  width: 250px;
  font-size: 15px;
  align-items: center;
  margin: 0rem auto;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 20px;
  text-align: center;
`;

export const AboutMe = styled.p`
  display: flex;
  margin-top: 1em;
  text-align: center;
  opacity: 0.5;
  font-size: 15px;
`;

export const CopyRight = styled.p`
  color: #fff;
  opacity: 0.3;
  position: relative;
  top: 125px;
  font-size: 15px;
`;

export const IconF = styled.a`
  display: flex;
  text-decoration: none;
  opacity: 0.5;
  font-size: 21px;
  margin: 7px;

  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    color: #0000ff;
  }
`;
export const IconI = styled.a`
  display: flex;
  text-decoration: none;
  opacity: 0.5;
  font-size: 21px;
  margin: 7px;

  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    color: #e1306c;
  }
`;
export const IconW = styled.a`
  display: flex;
  text-decoration: none;
  opacity: 0.5;
  font-size: 21px;
  margin: 7px;

  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    color: #34af23;
  }
`;

export const SubTitle = styled.li`
  display: flex;
  margin-top: 1em;
`;

export const Telephone = styled.p`
  display: flex;
  text-decoration: none;
  opacity: 0.5;
  margin-top: 1em;
  font-size: 15px;
`;
