import React, { Component } from 'react';
import Input from './input';

class PrimeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string1: '',
      string2: '',
      string3: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log('trying')
    this.setState({
      [(event.target.name)]: event.target.value 
    });
  }
  render() {
    const inputs = [{text: '1st Digit', name: 'string1', currentValue: this.state.string1 }, {text: '2nd Digit', name: 'string2', currentValue: this.state.string2 }, {text: '3rd Digit', name: 'string3', currentValue: this.state.string3 }];
    
    let numberInputs = inputs.map((input, i) => {
      return <Input key={i} text={input.text} name={input.name} id={input.name} current={input.currentValue} onChange={this.handleChange}/>  
    });
    console.log(this.state.string1, this.state.string2, this.state.string3);
    return (
      <div className="prime-input">
        <form>
          {numberInputs}
        </form>
      </div>
    );
  }
}

export default PrimeInput;