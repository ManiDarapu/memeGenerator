// Style your components here
import styled from 'styled-components'

export const Meme = styled.div`
  data-testid: meme;
  width: 45vw;
  height: 90vh;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: ${props => props.font};
  background-image: url(${props => props.bg});
`

export const Label = styled.label`
  color: black;
  padding: 10px;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border-color: #d7dfe9;
  border-style: solid;
  border-width: 3px;
  padding: 5px;
  margin: 5px;
  color: black;
`
export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  width: 40%;
  text-align: center;
  margin-top: 20px;
  border-style: none;
  height: 30px;
  border-radius: 10px;
  cursor: pointer;
`
