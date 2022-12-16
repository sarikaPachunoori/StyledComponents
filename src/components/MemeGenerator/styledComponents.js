import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`
export const FormGeneratorCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-right: 24px;
  padding-bottom: 32px;
  padding-left: 24px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`
export const Heading = styled.h1`
  font-size: 30px;
  color: #35469c;
  font-family: 'Roboto';
`
export const MemeCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightgreen;
  padding: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`
export const ImageCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  width: 50%;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
`
export const Content = styled.p`
  font-size: ${props => props.fontSize}px;
  font-family: 'Roboto';
  color: #ffffff;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const Label = styled.label`
  color: #7e858e;
  font-size: 15px;
  font-family: 'Roboto';
`
export const InputText = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  color: #5a7184;
  margin-top: 8px;
  margin-bottom: 15px;
  outline: none;
`

export const SelectDrop = styled.select`
  height: 40px;
  width: 50%;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  color: #5a7184;
  margin-top: 8px;
  margin-bottom: 15px;
  outline: none;
  cursor: pointer;
`
export const Option = styled.option`
  color: #1e293b;
`
export const GenerateButton = styled.button`
  height: 35px;
  width: 150px;
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  background-color: #0b69ff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
`
