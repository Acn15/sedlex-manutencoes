import styled from 'styled-components'

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10%;
`

export const List = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  /* gap: 30px; */
`

export const DirectLink = styled.p`
  color: white;
  font-size: 20px;
  width: 120px;
  text-align: center;
  font-weight: bold;

  transform: translateX(200%);
  opacity: 0;
  animation: slide-in-anim 1.5s ease-out forwards;

  @keyframes slide-in-anim {
    20% {
      opacity: 0;
    }
    60% {
      transform: translateX(45%);
    }
    75% {
      transform: translateX(52%);
    }
    100% {
      opacity: 1;
      transform: translateX(50%);
    }
  }

  /*   @keyframes slide-out-anim {
    20% {
      opacity: 0;
    }
    60% {
      transform: translateX(45%);
    }
    75% {
      transform: translateX(52%);
    }
    100% {
      opacity: 1;
      transform: translateX(50%);
    }
  } */

  &::after {
    content: '';
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    height: 2px;
    width: 0px;
    background-color: white;
  }

  &:hover::after {
    width: 100%;
    transition: all 0.4s;
  }
`
