import {Component} from 'react'
import {
  Container,
  Form,
  Label,
  Heading,
  MemeCont,
  ImageCont,
  InputText,
  GenerateButton,
  FormGeneratorCont,
  SelectDrop,
  Option,
  Content,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class App extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].id,
    imgUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: '',
  }

  onChangeImgUrl = event => {
    this.setState({imgUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  renderImageContainer = () => {
    const {imgUrl, topText, bottomText, fontSize} = this.state

    return (
      <ImageCont data-testid="meme" backgroundImage={imgUrl}>
        <Content fontSize={fontSize}>{topText} </Content>
        <Content fontSize={fontSize}>{bottomText} </Content>
      </ImageCont>
    )
  }

  renderFormInputText = () => {
    const {
      imgUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    return (
      <Form onSubmit={this.onSubmitForm}>
        <Label htmlFor="imgUrl">Image URL</Label>
        <InputText
          type="text"
          id="imgUrl"
          value={imgUrlInput}
          onChange={this.onChangeImgUrl}
          placeholder="Enter the Image URL"
        />
        <Label htmlFor="topText">Top Text</Label>
        <InputText
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
        />
        <Label htmlFor="bottomText">Bottom Text</Label>
        <InputText
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
        />

        <Label htmlFor="fontSize">Font Size</Label>
        <SelectDrop
          id="fontSize"
          value={fontSizeInput}
          onChange={this.onChangeFontSize}
        >
          {fontSizesOptionsList.map(font => (
            <Option key={font.optionId}>{font.displayText} </Option>
          ))}
        </SelectDrop>
        <GenerateButton type="submit">Generate</GenerateButton>
      </Form>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {
      fontSizeInput,
      imgUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state
    this.setState({
      imgUrl: imgUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  render() {
    return (
      <Container>
        <FormGeneratorCont>
          <Heading>Meme Generator</Heading>
          <MemeCont>
            {this.renderImageContainer()}
            {this.renderFormInputText()}
          </MemeCont>
        </FormGeneratorCont>
      </Container>
    )
  }
}

export default App
