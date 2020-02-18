import React, { Component } from 'react';

import { Card, Feed } from 'semantic-ui-react';

class Results extends Component {

  renderResults = () => {
    const { results } = this.props;
    return (
      <Feed>
        {results.map((res) => (
          <Feed.Event>
            <Feed.Summary>
              test
            </Feed.Summary>
          </Feed.Event>
        ))}
      </Feed>
    );
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header>Search Results</Card.Header>
          </Card.Content>
          <Card.Content>
            {this.props.results.length > 0 ? this.renderResults() :
              <Card.Description>Search an item to get results...</Card.Description>
            }
          </Card.Content>
        </Card>
      </div>
    );
  }

}

export default Results;
