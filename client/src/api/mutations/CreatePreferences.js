import gql from 'graphql-tag';

export default gql`
  mutation createPreferences(
    $id: ID!,
    $maxTempF: Int,
    $maxTempC: Int,
    $minTempF: Int,
    $minTempC: Int,
    $minWindSpeed: Int,
    $maxWindSpeed: Int,
    $minHumidity: Int,
    $maxHumidity: Int,
    $minRainChance: Int,
    $maxRainChance: Int
  ) {
    createPreferences(input: {
      id: $id,
      maxTempF: $maxTempF, 
      maxTempC: $maxTempC, 
      minTempF: $minTempF, 
      minTempC: $minTempC, 
      minWindSpeed: $minWindSpeed,
      maxWindSpeed: $maxWindSpeed,
      minHumidity: $minHumidity,
      maxHumidity: $maxHumidity,
      minRainChance: $minRainChance,
      maxRainChance: $maxRainChance
    }) {
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
`;
