import {Component} from 'react'
import {Input, Button, Meme, Label} from './styledComponents'

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
// Write your code here
class MemeGenerator extends Component {
  state = {isClicked: false, imageUrl: '', topText: '', bottomText: ''}

  imageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  topText = event => {
    this.setState({topText: event.target.value})
  }

  bottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  fontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  generate = event => {
    event.preventDefault()
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked, imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <div>
        <Meme data-testid="meme">
          <h1>Meme Generator</h1>
          <form onSubmit={this.generate}>
            <Label htmlFor="image">Image URL</Label>
            <Input
              type="text"
              id="image"
              value={imageUrl}
              placeholder="Enter the Image URL"
              onChange={this.imageUrl}
            />
            <Label htmlFor="top">Top Text</Label>
            <Input
              type="text"
              id="top"
              value={topText}
              placeholder="Enter the Top Text"
              onChange={this.topText}
            />
            <Label htmlFor="bottom">Bottom Text</Label>
            <Input
              type="text"
              id="bottom"
              value={bottomText}
              placeholder="Enter the Bottom Text"
              onChange={this.bottomText}
            />
            <Label htmlFor="font">Font Size</Label>
            <select name="font" id="font">
              {fontSizesOptionsList.map(each => (
                <option
                  key={each.optionId}
                  value={each.optionId}
                  onChange={this.fontSize}
                >
                  {each.displayText}
                </option>
              ))}
            </select>
            <Button type="submit">Generate</Button>
          </form>
        </Meme>
        {isClicked ? (
          <Meme bg={imageUrl} font={fontSize}>
            <p>{topText}</p>
            <p>{bottomText}</p>
          </Meme>
        ) : null}
      </div>
    )
  }
}

export default MemeGenerator
