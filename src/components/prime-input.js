import React, { Component } from 'react';
import Input from './input';

class PrimeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string1: '',
      string2: '',
      string3: '',
      errorMessage: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let string = event.target.value;
  
    let char = string.substring(string.length -1);
    if (numbers.indexOf(char) === -1) {
      this.setState({
        errorMessage: 'Error: Must be a single digit number (0,1,2,3,4,5,6,7,8,9)'
       })
    } else {
      this.setState({
        errorMessage: null,
        [(event.target.name)]: char
      });
    }
  }
  render() {
    const inputs = [{text: '1st Digit', name: 'string1'}, {text: '2nd Digit', name: 'string2'}, {text: '3rd Digit', name: 'string3'}];

    let numberInputs = inputs.map((input, i) => {
      return <Input key={i} text={input.text} name={input.name} id={input.name} current={this.state[input.name]} onChange={this.handleChange}/>  
    });

    return (
      <div className="prime-input">
        <form>
          {this.state.errorMessage ? <div>{this.state.errorMessage}</div> : ''}
          {numberInputs}
        </form>
      </div>
    );
  }
}

export default PrimeInput;