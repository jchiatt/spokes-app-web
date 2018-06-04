import React from 'react';
import { graphql } from 'react-apollo';
import CreatePreferences from '../../api/mutations/CreatePreferences';
import ListPreferences from '../../api/queries/ListPreferences';

class AddPreferences extends React.Component {
  state = {
    maxTempF: 0,
    maxTempC: 0,
    minTempF: 0,
    minTempC: 0,
    minWindSpeed: 0,
    maxWindSpeed: 0,
    minHumidity: 0,
    maxHumidity: 0,
    minRainChance: 0,
    maxRainChance: 0,
  }

  onChange = (key, value) => {
    this.setState({ [key]: value });
  }

  createPreferences = () => {
    const {
      maxTempF,
      maxTempC,
      minTempF,
      minTempC,
      minWindSpeed,
      maxWindSpeed,
      minHumidity,
      maxHumidity,
      minRainChance,
      maxRainChance,
    } = this.state;

    this.props.onAdd({
      id: 'test8',
      maxTempF,
      maxTempC,
      minTempF,
      minTempC,
      minWindSpeed,
      maxWindSpeed,
      minHumidity,
      maxHumidity,
      minRainChance,
      maxRainChance,
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Temperature Range</h2>
          <input
            value={this.state.maxTempF}
            onChange={event => this.onChange('maxTempF', parseInt(event.target.value, 10))}
            placeholder="Max F Temp"
          />
          <input
            value={this.state.minTempF}
            onChange={event => this.onChange('minTempF', parseInt(event.target.value, 10))}
            placeholder="Min F Temp"
          />
          <input
            value={this.state.maxTempC}
            onChange={event => this.onChange('maxTempC', parseInt(event.target.value, 10))}
            placeholder="Max C Temp"
          />
          <input
            value={this.state.minTempC}
            onChange={event => this.onChange('minTempC', parseInt(event.target.value, 10))}
            placeholder="Min C Temp"
          />
        </div>

        <div>
          <h2>Wind Speed Range</h2>
          <input
            value={this.state.minWindSpeed}
            onChange={event => this.onChange('minWindSpeed', event.target.value)}
            placeholder="Min Wind Speed"
          />
          <input
            value={this.state.maxWindSpeed}
            onChange={event => this.onChange('maxWindSpeed', event.target.value)}
            placeholder="Max Wind Speed"
          />
        </div>

        <div>
          <h2>Humidity Range</h2>
          <input
            value={this.state.minHumidity}
            onChange={event => this.onChange('minHumidity', event.target.value)}
            placeholder="Min Humidity"
          />
          <input
            value={this.state.maxHumidity}
            onChange={event => this.onChange('maxHumidity', event.target.value)}
            placeholder="Max Humidity"
          />
        </div>

        <div>
          <h2>Rain Chance</h2>
          <input
            value={this.state.minRainChance}
            onChange={event => this.onChange('minRainChance', event.target.value)}
            placeholder="Min Rain Chance"
          />
          <input
            value={this.state.maxRainChance}
            onChange={event => this.onChange('maxRainChance', event.target.value)}
            placeholder="Max Rain Chance"
          />
        </div>

        <div onClick={this.createPreferences}>
          <p>Save Preferences</p>
        </div>
      </div>
    );
  }
}

export default graphql(CreatePreferences, {
  props: props => ({
    onAdd: preferences => props.mutate({
      variables: preferences,
      optimisticResponse: () => ({ createPreferences: { ...preferences, __typename: 'Mutation' } }),
    }),
  }),
  // options: {
  //   refetchQueries: [{ query: ListPreferences }],
  //   update: (dataProxy, { data: { createPreferences } }) => {
  //     const data = dataProxy.readQuery({ query: ListPreferences });

  //     data.listPreferences.items.push(createPreferences);

  //     dataProxy.writeQuery({ query: ListPreferences, data });
  //   },
  // },
})(AddPreferences);
