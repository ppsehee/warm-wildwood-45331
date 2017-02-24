var express = require('express');
var router = express.Router();
var InfoDAO = require('../models/InfoDAO');

/* GET home page. */
router.get('/', function (req, res) {
    InfoDAO.selectInfo(req.session.receiver, req.session.caller, function (errorMessage, data) {
        if (data == null) {
            return res.send('<script> alert("조회할 데이터가 존재하지 않습니다!"); location.href="/" </script>');
        }

        res.render('main', {title: '메인', data: data});
    });
});

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;
