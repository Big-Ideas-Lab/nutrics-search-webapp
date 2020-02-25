import React, { Component } from 'react';

import { Card, Grid, Feed } from 'semantic-ui-react';

class Results extends Component {

  renderResults = () => {
    const { results } = this.props;
    const keys = Object.keys(results)
    const calories = results.calories;
    return (
      <div>
        <p><b>Calories: </b> {calories}</p>
        <Feed>
            {keys.map((key) => {
              if (key == 'calories') {
                return null
              }
              return (
                <Feed.Event key={key}>
                  <Feed.Content>
                    <Grid centered columns={2}>
                      <Grid.Column>{this.titleCase(key)}</Grid.Column>
                      <Grid.Column>{results[key]}</Grid.Column>
                    </Grid>
                  </Feed.Content>
                </Feed.Event>
              );
            })}
        </Feed>
      </div>
    );
  }

  titleCase = str => {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
 }

  render() {
    const { results } = this.props;
    const keys = Object.keys(results)
    const cardStyle = { color: 'black' }
    return (
      <Card
        centered
        fluid
        style={cardStyle}
      >
        <Card.Content>
          {keys.length > 0 ? this.renderResults() :
            <Card.Description>Search an item to get results...</Card.Description>
          }
        </Card.Content>
      </Card>
    );
  }

}

export default Results;
