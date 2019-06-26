const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const PrmSchema = require('../models/prm-details');

let data = [{
    Summary: '(HUE Version 4.0)Bug3',
    Importance: 'Middle',
    Labo: 'CFM',
    MileStone:'V41_1905',
    DprId:'65586',
    Progress:'DevelopConfirming',
    RelationTickets: [{
      Summary: '(HUE Version 4.0)BugT5',
      Importance: 'Middle',
      Labo: 'CFM',
      MileStone:'V41_1902',
      BugId:'66544',
      Progress:'Developing',
    },{
      Summary: '(HUE Version 4.0)BugT6',
      Importance: 'High',
      Labo: 'CFM',
      MileStone:'V41_1908',
      BugId:'66789',
      Progress:'Evaluated',
    }],
},
{
    Summary: '(HUE Version 4.0)Bug2',
    Importance: 'High',
    Labo: 'CFM',
    MileStone:'V41_1905',
    DprId:'65486',
    Progress:'Developed',
    RelationTickets: [{
      Summary: '(HUE Version 4.0)BugT3',
      Importance: 'High',
      Labo: 'CFM',
      MileStone:'V41_1902',
      BugId:'66524',
      Progress:'Remand',
    },{
      Summary: '(HUE Version 4.0)BugT4',
      Importance: 'Middle',
      Labo: 'CFM',
      MileStone:'V41_1908',
      BugId:'65789',
      Progress:'New',
    }],
},
{
    Summary: '(HUE Version 4.0)Bug1',
    Importance: 'Highest',
    Labo: 'CFM',
    MileStone:'V41_1905',
    DprId:'64586',
    Progress:'DevelopConifrmed',
    RelationTickets: [{
      Summary: '(HUE Version 4.0)BugT2',
      Importance: 'Middle',
      Labo: 'CFM',
      MileStone:'V41_1902',
      BugId:'65544',
      Progress:'Developing',
    },{
      Summary: '(HUE Version 4.0)BugT1',
      Importance: 'High',
      Labo: 'CFM',
      MileStone:'V41_1908',
      BugId:'66654',
      Progress:'DevelopConfirmed',
    }],
},];

router.get('/insert', (req, res, nex) => {
    console.log('FUncn');
    data._id = mongoose.Types.ObjectId();
    var prmschema = new PrmSchema(data);
    mongoose.connection.db.collection('prm_details').createIndex({
        Summary: 'text',
        'RelationTickets.Summary': 'text',
    }, {weights: {
        Summary: 2,
        'RelationTickets.Summary': 1,
    }})
    // Store into Database
    PrmSchema.collection.insert(data, (err, result) => {
        if (err) console.error(err);
        console.log(result);
        res.status(201).send(result);
    });
});

router.get('/getAll', (req,res,nex) => {
    PrmSchema.find({}, (err, docs) => {
        if(err) console.error(err);
        res.status(201).send(docs);
    });
});

router.get('/search', (req,res,nex) => {
    PrmSchema.find({$text: {$search: req.params.keyword}}, (err, docs) => {
        if(err) console.error(err);
        res.status(201).send(docs);
    })
});

module.exports = router;