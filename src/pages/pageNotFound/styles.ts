import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 3rem;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 5rem;
`

export const GroupImage = styled.div`
  display: flex;
  padding: 1rem;
  height: 31.25rem;
  width: 31.25rem;
  margin: 0rem auto;
`

export const ImgStart = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Home = styled.a`
  width: 7rem;
  margin-top: 1em;
  text-align: center;
  height: 1.6rem;
  color: #fff;
  border-radius: 2rem;
  background-color: #40a9eb;
  align-items: center;
  padding: 0.3rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: #065b8f;
  }
`

export const Text = styled.div`
  display: flex;
`
