import React, { Component } from 'react';

import { Icon, Input } from 'semantic-ui-react'

import Results from './Results';

import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      results: [],
    }
  }

  onInputChange = (e, { value }) => {
    this.setState({
      input: value,
    })
  }

  onKeyDown = ({ key }) => {
    if (key == 'Enter') {
      if (this.state.input.trim() !== '') {
        this.onSearch();
      }
    }
  }

  onClick = () => {
    if (this.state.input.trim() !== '') {
      this.onSearch();
    }
  }

  onSearch = () => {
    const url = `https://moveitdev-bfe5e.appspot.com/get_random_nutrients/${this.state.input}`
    const config = {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
    }
    axios(url)
    .then(res => {
      console.log(res);
      this.setState({ results: res.data })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const { input, results } = this.state;

    const searchIcon = (
      <Icon
        inverted
        circular
        link
        name='search'
        onClick={this.onClick}
      />
    );
    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1>
          Powered by Nutrics @ BIG IDEAs Lab
        </h1>
        <Input
          placeholder="Search..."
          value={input}
          onChange={this.onInputChange}
          icon={searchIcon}
          onKeyDown={this.onKeyDown}
        />
        <br />
        <br />
        <Results results={results} />
      </div>
    );
  }

}

export default Search;
