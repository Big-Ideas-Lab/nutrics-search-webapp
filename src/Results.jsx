import React, { Component } from 'react';

import { Card, Feed } from 'semantic-ui-react';

class Results extends Component {

  renderResults = () => {
    const { results } = this.props;
    const keys = Object.keys(results)
    console.log(keys);
    // debugger;
    return (
      <div>
        {keys.map((key) => (
          <div id={key}>
            {key}: {results[key]}
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { results } = this.props;
    const keys = Object.keys(results)
    return (
      <div>
        {keys.length > 0 ? this.renderResults() :
          <Card.Description>Search an item to get results...</Card.Description>
        }
      </div>
    );
  }

}

export default Results;
