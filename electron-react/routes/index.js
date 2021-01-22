var express = require('express');
var router = express.Router();
const { inquireTable } = require('../service/operation');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: '123123123' });
// });

router.get('/', (routerRes) => {
  inquireTable('SELECT * FROM er_user').then((inquireRes) => {
    console.log(inquireRes);
    // routerRes.send(inquireRes);
  });
});

module.exports = router;
