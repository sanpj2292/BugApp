var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  // axios.post('/api/insert').then(result => {
    // console.log(result);
    res.render('index', { title: 'Express' });
  // }).catch(err => {
  //   console.log('Error Logging: ');
  //   console.error(err.message)
  // });
});

module.exports = router;
