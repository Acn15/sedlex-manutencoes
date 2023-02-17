import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
  align-items: center;
`

export const WrapperMail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  margin: 7rem;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  display: flex;
`

export const SendMail = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  min-width: 200px;
`

export const InputMail = styled.input`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.55);
  margin-top: 15px;
  padding: 1rem;
  border-radius: 5px;
  width: 100%;
  /* min-width: 200px; */

  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.5;
  }

  :focus {
    border: 1px solid #1184e0;
    transition: 0.9s;

    ::placeholder,
    ::-webkit-input-placeholder {
      opacity: 0;
    }
  }
`

export const InputMailText = styled.textarea`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.55);
  margin-top: 15px;
  padding: 1rem;
  border-radius: 5px;
  width: 100%;
  height: 20vh;
  /* min-width: 200px; */

  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.5;
  }

  :focus {
    border: 1px solid #1184e0;
    transition: 0.9s;

    ::placeholder,
    ::-webkit-input-placeholder {
      opacity: 0;
    }
  }
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin-top: 15px;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  justify-content: center;
  width: 5rem;

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: rgba(17, 132, 224, 0.3);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`

export const WrapperMap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  height: 50vh;
  margin: 7rem;
  align-items: center;
  min-width: 200px;
`

export const InfoMap = styled.h2`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

export const Map = styled.iframe`
  display: flex;
  width: 100%;
  height: 100%;
  /* min-width: 250px; */
`
