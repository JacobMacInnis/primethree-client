import React, { Component } from 'react';
import Input from './input';
import { inputs, acceptableInputs, numbers } from './helpers/helpers';
import { Link } from 'react-router-dom';
import './styles/prime-input.css';
import axios from 'axios';
import { API_BASE_URL } from '../config';

class PrimeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string1: '_',
      string2: '_',
      string3: '_',
      errorMessage: '',
      loading: false,
      httpErr: null,
      result: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let string = event.target.value;
    let char = string.substring(string.length -1);
    if (acceptableInputs.indexOf(char) === -1) {
      this.setState({
        errorMessage: 'Error: Must be single digit number ex. (0,1,2,3,4,5,6,7,8,9)'
       })
    } else {
      if (char === ' ' || char === '') {
        this.setState({
          errorMessage: null,
          [(event.target.name)]: '_'
        });  
      } else {
        this.setState({
          errorMessage: null,
          [(event.target.name)]: char
        });
      }
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    if (numbers.indexOf(this.state.string1) === -1 || numbers.indexOf(this.state.string2) === -1 || numbers.indexOf(this.state.string3) === -1) {
      this.setState({
        errorMessage: 'Error: all inputs must contain numbers'
      });
    } else {
      let primeInput = `${this.state.string1}${this.state.string2}${this.state.string3}`;
      this.setState({ loading: true });
      axios.post(`${API_BASE_URL}/primes`, {input: primeInput})
      .then(res => {
        if (res.data.result === '-1') {
          this.setState({
            result: `${res.data.input} was not found in the first 10,000 prime numbers`,
            loading: false
          });
        } else {
          this.setState({
            result: `${res.data.input} first apears in the Prime Number ${res.data.result}. It is the ${res.data.index}th Prime Number`,
            loading: false
          })
        }
      })
      .catch(error => {
        this.setState({ httpErr: error.response });
      })
    }
  }
  render() {
    let numberInputs = inputs.map((input, i) => {
      return <Input key={i} text={input.text} name={input.name} id={input.name} current={this.state[input.name]} onChange={this.handleChange}/>  
    });
    return (
      <form className="prime-input" 
        onSubmit={this.handleSubmit}>
        <h2 className='number'>{`${this.state.string1}    ${this.state.string2}    ${this.state.string3} `}</h2>
        <div className='error-container'>     {this.state.errorMessage ?           this.state.errorMessage : ''}
        </div>
        <div className='number-inputs'>
          {numberInputs}
        </div>
        <div className='submit-button-container'>
        <input type='submit' value='Search' className='submit-button' />
        </div>
        <div className='result'>{this.state.result ? this.state.result : ''}</div>
        <Link to="/homepage" className="result-link">
              See All Results
        </Link>
      </form>
    );
  }
}

export default PrimeInput;