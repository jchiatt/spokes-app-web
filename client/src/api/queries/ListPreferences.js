import gql from 'graphql-tag';

export default gql`
  query listPreferences {
    listPreferences {
      items {
        id
        maxTempF
        maxTempC
        minTempF
        minTempC
        minWindSpeed
        maxWindSpeed
        minHumidity
        maxHumidity
        minRainChance
        maxRainChance
      }
    }
  }
`;
