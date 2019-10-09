var express = require('express');
var router = express.Router();

/* GET /subjects/ */
router.get('/', function(req, res, next) {
  const { db } = req.app.locals;

  let query = {};
  if (req.query.search){
      query.name = new RegExp(req.query.search, 'i');
  }

  db.collection('subjects').find(query).toArray((err, subjects) => res.json(subjects));
});

/* GET /subject/:id */
/* GET theme/id */
router.get('subjects/:id', function(req, res) {
  const { db } = req.app.locals;
  const { id } = req.params;
  db.collection('subjects').findOne({ _id: new ObjectID(id) }, (err, subjects) => res.json(subjects));
});
/* PUT /subjects/:id */

router.put('/', (req, res) => {
  const { db } = req.app.locals;

  db.collection('subjects').insertOne(req.body, (err, subject) => res.json(subject));
}); 

module.exports = router;