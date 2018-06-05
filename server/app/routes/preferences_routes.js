var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/preferences/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    
    db.collection('preferences').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });

  app.put('/preferences/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    const preferences = { 
      maxTempF: req.body.maxTempF,
      minTempF: req.body.minTempF,
      maxTempC: req.body.maxTempC,
      minTempC: req.body.minTempC,
      maxWindSpeed: req.body.maxWindSpeed,
      minWindSpeed: req.body.minWindSpeed,
      maxHumidity: req.body.maxHumidity,
      minHumidity: req.body.minHumidity,
      maxRainChance: req.body.maxRainChance,
      minRainChance: req.body.minRainChance
    };

    db.collection('preferences').update(details, preferences, (err, results) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(preferences)
      }
    });
  });
  
  app.post('/preferences', (req, res) => {
    const preferences = { 
      maxTempF: req.body.maxTempF,
      minTempF: req.body.minTempF,
      maxTempC: req.body.maxTempC,
      minTempC: req.body.minTempC,
      maxWindSpeed: req.body.maxWindSpeed,
      minWindSpeed: req.body.minWindSpeed,
      maxHumidity: req.body.maxHumidity,
      minHumidity: req.body.minHumidity,
      maxRainChance: req.body.maxRainChance,
      minRainChance: req.body.minRainChance
    };
    
    db.collection('preferences').insert(preferences, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has ocurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};