import React, { Component } from 'react';
import './styles/results.css';
import axios from 'axios';
import { API_BASE_URL } from '../config';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      results: null
    };
  }
  componentWillMount() {
    axios.get(`${API_BASE_URL}/primes`)
    .then(res => {
      this.setState({
        results: res.data
      });
    })
    .catch(error => {
      this.setState({ error: error.response})
    });
  }
  render() {
    let results = '';
    if (this.state.results !== null) {
      results = this.state.results.slice(0).reverse().map((result, i) => {
        return <div key={i} className='search-results'><p className='left-result'>{result.input}</p><p className='right-result'>{result.result === '-1' ? 'Not Found' : result.result}</p></div>
      })
    }
    return (
      <div className='results-container'>
        <div className='results-list'>
          {results}
        </div>
      </div>
    );
  }
}

export default Results;