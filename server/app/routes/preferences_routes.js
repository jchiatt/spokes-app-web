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
      maxTempF: parseInt(req.body.maxTempF, 10),
      minTempF: parseInt(req.body.minTempF, 10),
      maxTempC: parseInt(req.body.maxTempC, 10),
      minTempC: parseInt(req.body.minTempC, 10),
      maxWindSpeed: parseInt(req.body.maxWindSpeed, 10),
      minWindSpeed: parseInt(req.body.minWindSpeed, 10),
      maxHumidity: parseInt(req.body.maxHumidity, 10),
      minHumidity: parseInt(req.body.minHumidity, 10),
      maxRainChance: parseInt(req.body.maxRainChance, 10),
      minRainChance: parseInt(req.body.minRainChance, 10),
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
      maxTempF: parseInt(req.body.maxTempF, 10),
      minTempF: parseInt(req.body.minTempF, 10),
      maxTempC: parseInt(req.body.maxTempC, 10),
      minTempC: parseInt(req.body.minTempC, 10),
      maxWindSpeed: parseInt(req.body.maxWindSpeed, 10),
      minWindSpeed: parseInt(req.body.minWindSpeed, 10),
      maxHumidity: parseInt(req.body.maxHumidity, 10),
      minHumidity: parseInt(req.body.minHumidity, 10),
      maxRainChance: parseInt(req.body.maxRainChance, 10),
      minRainChance: parseInt(req.body.minRainChance, 10)
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