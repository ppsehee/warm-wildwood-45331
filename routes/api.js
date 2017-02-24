var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var FileManager = require('../file/FileManager');
var InfoDAO = require('../models/InfoDAO');
var InfoDTO = require('../models/InfoDTO');


/* GET home page. */
router.post('/', upload.single('recordFile'), function (req, res) {
    let file = req.file;

    if (!file) {
        return res.status(400).json({message: "녹음 파일이 존재하지 않습니다!"});
    }

    console.log(file.mimetype);

    let info = req.body.info;

    if (!info) {
        return res.status(400).json({message: "데이터는 공백이 허용되지 않습니다!"});
    }

    try {
        info = JSON.parse(info);
    } catch (e) {
        return res.status(400).json({message: "데이터가 JSON 형식이 아닙니다!"});
    }

    const receiver = info.receiver;

    if (!receiver) {
        return res.status(400).json({message: "보호자 전화번호는 공백이 허용되지 않습니다!"});
    }

    const caller = info.caller;

    if (!caller) {
        return res.status(400).json({message: "사용자 전화번호는 공백이 허용되지 않습니다!"});
    }

    const location = info.location;

    if (!location) {
        return res.status(400).json({message: "발신 위치는 공백이 허용되지 않습니다!"});
    }

    try {
        let check = JSON.parse(info);
    } catch (e) {
        return res.status(400).json({message: "발신 위치 데이터가 JSON 형식이 아닙니다!"});
    }

    const car_number = info.car_number;

    if (!car_number) {
        return res.status(400).json({message: "차량 번호는 공백이 허용되지 않습니다!"});
    }

    info.time = new Date().getTime();

    FileManager.moveFileFromTempPath(file, function (uploadPath) {
        console.log(uploadPath);
        let info = new InfoDTO(info.id, info.receiver, info.caller, info.location, info.time, uploadPath, info.car_number);

        InfoDAO.inputInfo(info, function (isSuccessful, message) {
            if (isSuccessful) {
                return res.status(201).json(message);
            } else {
                return res.status(500).json(message);
            }
        })
    })
});


module.exports = router;
